document.addEventListener('DOMContentLoaded', () => {
  // ====== TOASTER NOTIFICATION FUNCTION ======
  function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => toast.remove(), 3500);
  }

  // ====== VARIABLES ======
  const cartContainer = document.getElementById('cart-page-items');
  const subtotalEl = document.getElementById('summary-subtotal');
  const shippingEl = document.getElementById('summary-shipping');
  const discountEl = document.getElementById('summary-discount');
  const totalEl = document.getElementById('summary-total');
  const applyCouponBtn = document.getElementById('apply-coupon');
  const couponInput = document.getElementById('coupon-code');

  const proceedBtn = document.querySelector('.checkout-btn');
  const checkoutModal = document.getElementById('checkout-modal');
  const closeCheckout = document.getElementById('close-checkout');
  const checkoutForm = document.getElementById('checkout-form');
  const loader = document.getElementById('loader');
  const successMsg = document.getElementById('success-msg');

  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  let appliedCoupon = localStorage.getItem('appliedCoupon') || null;

  const formatPrice = (num) => '₹' + num.toLocaleString('en-IN', { minimumFractionDigits: 2 });

  // ====== Render Cart ======
  function renderCart() {
    cartContainer.innerHTML = '';
    if (cartItems.length === 0) {
      cartContainer.innerHTML = `<p class="empty-cart">🛍️ Your cart is empty</p>`;
      updateSummary();
      return;
    }

    cartItems.forEach((item) => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('cart-item-row');
      
      // Use image path as-is (already prefixed correctly from women.js)
      let imagePath = item.image || '';
      
      itemDiv.innerHTML = `
        <img src="${imagePath}" alt="${item.name}" onerror="this.src='../homepage/placeholder.png'">
        <div class="cart-item-details">
          <h3>${item.name}</h3>
          <p class="price">${formatPrice(item.price)}</p>
        </div>
        <div class="quantity-controls">
          <button class="qty-btn minus" data-id="${item.id}">-</button>
          <span class="qty">${item.quantity}</span>
          <button class="qty-btn plus" data-id="${item.id}">+</button>
        </div>
        <div class="item-total">${formatPrice(item.price * item.quantity)}</div>
        <div class="cart-item-actions">
          <button class="remove-item" data-id="${item.id}"><i class="fas fa-trash"></i></button>
          <button class="save-for-later" data-id="${item.id}"><i class="fas fa-heart"></i> Save for Later</button>
        </div>`;
      cartContainer.appendChild(itemDiv);
    });

    attachEvents();
    updateSummary();
  }

  // ====== Update Summary ======
  function updateSummary() {
    let subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    let shipping = subtotal > 1000 || subtotal === 0 ? 0 : 50;
    let discount = 0;

    if (appliedCoupon === 'SAVE10') discount = subtotal * 0.1;
    else if (appliedCoupon === 'SAVE20') discount = subtotal * 0.2;
    else if (appliedCoupon === 'FREESHIP') shipping = 0;

    let total = subtotal + shipping - discount;

    subtotalEl.textContent = formatPrice(subtotal);
    shippingEl.textContent = shipping === 0 && subtotal > 0 ? 'Free 🚚' : formatPrice(shipping);
    discountEl.textContent = '-' + formatPrice(discount);
    totalEl.textContent = formatPrice(total);

    localStorage.setItem('cartTotal', total);
  }

  // ====== Save Cart ======
  function saveCart() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  // ====== Event Attach ======
  function attachEvents() {
    document.querySelectorAll('.qty-btn.plus').forEach((btn) =>
      btn.addEventListener('click', () => updateQuantity(btn.dataset.id, 1))
    );
    document.querySelectorAll('.qty-btn.minus').forEach((btn) =>
      btn.addEventListener('click', () => updateQuantity(btn.dataset.id, -1))
    );
    document.querySelectorAll('.remove-item').forEach((btn) =>
      btn.addEventListener('click', () => removeItem(btn.dataset.id))
    );
    document.querySelectorAll('.save-for-later').forEach((btn) =>
      btn.addEventListener('click', () => moveToSaved(btn.dataset.id))
    );
  }

  // ====== Quantity Update / Remove ======
  function updateQuantity(id, change) {
    const product = cartItems.find((p) => p.id == id);
    if (!product) return;
    product.quantity = Math.max(1, product.quantity + change);
    saveCart();
    renderCart();
    showToast(`Updated quantity for ${product.name}`, 'info');
  }

  function removeItem(id) {
    const removed = cartItems.find((item) => item.id == id);
    cartItems = cartItems.filter((i) => i.id != id);
    saveCart();
    renderCart();
    showToast(`🗑️ ${removed.name} removed from cart.`, 'error');
  }

  // ====== Coupon Handling ======
  applyCouponBtn.addEventListener('click', () => {
    const code = couponInput.value.trim().toUpperCase();
    if (['SAVE10', 'SAVE20', 'FREESHIP'].includes(code)) {
      appliedCoupon = code;
      localStorage.setItem('appliedCoupon', code);
      showToast(`🎉 Coupon "${code}" applied!`, 'success');
    } else {
      showToast('❌ Invalid coupon code', 'error');
      appliedCoupon = null;
    }
    updateSummary();
  });

  // ====== Save for Later ======
  function moveToSaved(id) {
    const item = cartItems.find((i) => i.id == id);
    let saved = JSON.parse(localStorage.getItem('savedItems')) || [];
    if (!saved.some((s) => s.id == item.id)) {
      saved.push(item);
      localStorage.setItem('savedItems', JSON.stringify(saved));
      showToast(`❤️ ${item.name} moved to Saved for Later.`, 'info');
    }
    cartItems = cartItems.filter((i) => i.id != id);
    saveCart();
    renderCart();
    renderSavedItems();
  }

  function renderSavedItems() {
    const savedContainer = document.getElementById('saved-items');
    let saved = JSON.parse(localStorage.getItem('savedItems')) || [];
    savedContainer.innerHTML = '';

    if (saved.length === 0) {
      savedContainer.innerHTML = '<p class="empty-saved">No items saved yet.</p>';
      return;
    }

    saved.forEach((item) => {
      const div = document.createElement('div');
      div.classList.add('cart-item-row');
      
      // Use image path as-is (already prefixed correctly from women.js)
      let imagePath = item.image || '';
      
      div.innerHTML = `
        <img src="${imagePath}" alt="${item.name}" onerror="this.src='../homepage/placeholder.png'">
        <div class="cart-item-details">
          <h3>${item.name}</h3>
          <p>${formatPrice(item.price)}</p>
        </div>
        <button class="move-to-cart" data-id="${item.id}">
          <i class="fas fa-shopping-cart"></i> Move to Cart
        </button>`;
      savedContainer.appendChild(div);
    });

    document.querySelectorAll('.move-to-cart').forEach((btn) =>
      btn.addEventListener('click', () => moveToCart(btn.dataset.id))
    );
  }

  function moveToCart(id) {
    let saved = JSON.parse(localStorage.getItem('savedItems')) || [];
    let savedItem = saved.find((s) => s.id == id);
    if (!savedItem) return;

    if (!cartItems.some((c) => c.id == savedItem.id)) {
      cartItems.push(savedItem);
      showToast(`🛒 ${savedItem.name} moved to Cart.`, 'success');
    }

    saved = saved.filter((s) => s.id != id);
    localStorage.setItem('savedItems', JSON.stringify(saved));
    saveCart();
    renderCart();
    renderSavedItems();
  }

  // ====== Checkout Modal ======
  if (proceedBtn) {
    proceedBtn.addEventListener('click', () => {
      const total = localStorage.getItem('cartTotal') || 0;
      document.getElementById('checkout-total').textContent = `Total Payable: ₹${total}`;
      checkoutModal.style.display = 'flex';
    });
  }

  closeCheckout.addEventListener('click', () => {
    checkoutModal.style.display = 'none';
    checkoutForm.style.display = 'block';
    successMsg.style.display = 'none';
  });

  // ====== Checkout Submit (No PDF) ======
  checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    const payment = document.getElementById('payment').value;

    if (!name || !email || !address || !payment) {
      showToast('⚠️ Please fill all fields!');
      return;
    }

    loader.style.display = 'block';
    checkoutForm.style.display = 'none';

    setTimeout(() => {
      loader.style.display = 'none';
      successMsg.style.display = 'block';
      successMsg.classList.add('show');
      showToast('✅ Order placed successfully!');

      localStorage.removeItem('cartItems');
      localStorage.removeItem('cartTotal');

      setTimeout(() => {
        checkoutModal.style.display = 'none';
        successMsg.style.display = 'none';
        checkoutForm.style.display = 'block';
        window.location.href = '../homepage/index.html';
      }, 5000);
    }, 2000);
  });

  // ====== Back to Home Button ======
  const backHomeBtn = document.getElementById("back-home");
  if (backHomeBtn) {
    backHomeBtn.addEventListener("click", () => {
      checkoutModal.style.display = "none";
      window.location.href = "../homepage/index.html";
    });
  }

  renderCart();
  renderSavedItems();
});
