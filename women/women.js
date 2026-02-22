/* ================= DATA: 36 products (images from Unsplash fashion queries) */
const products = [
  {id:'p001',title:'Floral A-line Kurta',brand:'Aurelia',category:'Ethnic',price:1299,mrp:1999,rating:4.3,images:['Images/product_1.jpg'],badges:['20% OFF'],sizes:['S','M','L','XL'],colors:['Pink','Blue'],desc:'Lightweight printed kurta for festive & daily use.'},
  {id:'p002',title:'Denim Straight Jeans',brand:'Levis',category:'Western',price:2199,mrp:2499,rating:4.5,images:['Images/product_2.jpg'],badges:['New'],sizes:['28','30','32','34'],colors:['Blue'],desc:'Classic straight-fit denim with stretch.'},
  {id:'p003',title:'Casual Cotton Tee',brand:'Fame Forever',category:'Tops',price:499,mrp:799,rating:4.0,images:['Images/product_3.jpg'],badges:[],sizes:['S','M','L'],colors:['White','Black'],desc:'Soft cotton everyday tee.'},
  {id:'p004',title:'Printed Palazzo',brand:'W for Woman',category:'Bottoms',price:999,mrp:1499,rating:4.1,images:['Images/product_4.jpg'],badges:['30% OFF'],sizes:['S','M','L'],colors:['Beige','Green'],desc:'Flowy palazzo with comfortable waist.'},
  {id:'p005',title:'Silk Blend Saree',brand:'Biba',category:'Ethnic',price:3499,mrp:4999,rating:4.6,images:['Images/product_5.jpg'],badges:[],sizes:['Free'],colors:['Mauve'],desc:'Elegant silk blend saree for occasions.'},
  {id:'p007',title:'Ankle Strap Heels',brand:'Catwalk',category:'Footwear',price:2399,mrp:3499,rating:4.0,images:['Images/product_7.jpg'],badges:['Limited'],sizes:['6','7','8','9'],colors:['Beige','Black'],desc:'Stylish ankle strap heels with block heel.'},
  {id:'p008',title:'Longline Blazer',brand:'Vero Moda',category:'Outerwear',price:2799,mrp:3999,rating:4.4,images:['Images/product_8.jpg'],badges:[],sizes:['S','M','L'],colors:['Navy'],desc:'Structured blazer for formal and casual looks.'},
  {id:'p009',title:'Pleated Skirt',brand:'Forever New',category:'Skirts',price:1199,mrp:1699,rating:4.1,images:['Images/product_9.jpg'],badges:[],sizes:['S','M','L'],colors:['Olive','Black'],desc:'Midi-length pleated skirt in soft fabric.'},
  {id:'p010',title:'Graphic Sweatshirt',brand:'H&M',category:'Tops',price:1499,mrp:1999,rating:4.0,images:['Images/product_10.jpg'],badges:['Hot'],sizes:['S','M','L','XL'],colors:['Gray','Black'],desc:'Cozy printed sweatshirt.'},
  {id:'p011',title:'Wrap Dress',brand:'AND',category:'Dresses',price:1999,mrp:2799,rating:4.3,images:['Images/product_11.jpg'],badges:[],sizes:['S','M','L'],colors:['Maroon','Blue'],desc:'Flattering wrap dress for day & evening.'},
  {id:'p012',title:'Printed Scarf',brand:'Zara',category:'Accessories',price:499,mrp:699,rating:4.2,images:['Images/product_12.jpg'],badges:[],sizes:['Free'],colors:['Multi'],desc:'Lightweight printed scarf.'},
  {id:'p013',title:'Embroidered Kurta Set',brand:'W',category:'Ethnic',price:2499,mrp:3499,rating:4.5,images:['Images/product_13.jpg'],badges:['Best Seller'],sizes:['S','M','L','XL'],colors:['Cream'],desc:'Elegant kurta with matching bottom.'},
  {id:'p014',title:'Linen Shirt',brand:'Global Desi',category:'Tops',price:1299,mrp:1699,rating:4.0,images:['Images/product_14.jpg'],badges:[],sizes:['S','M','L'],colors:['Beige','White'],desc:'Light linen shirt for summers.'},
  {id:'p015',title:'Block Print Dupatta',brand:'Biba',category:'Accessories',price:599,mrp:899,rating:4.1,images:['Images/product_15.jpg'],badges:[],sizes:['Free'],colors:['Rust'],desc:'Hand-block print dupatta.'},
  {id:'p016',title:'Slim Fit Trousers',brand:'Marks & Spencer',category:'Bottoms',price:1899,mrp:2499,rating:4.2,images:['Images/product_16.jpg'],badges:[],sizes:['28','30','32'],colors:['Black','Gray'],desc:'Tailored slim-fit trousers.'},
  {id:'p017',title:'Comfort Sneakers',brand:'Nike',category:'Footwear',price:3499,mrp:4999,rating:4.4,images:['Images/product_17.jpg'],badges:['Trending'],sizes:['6','7','8','9'],colors:['White'],desc:'Daily wear sneakers with cushioning.'},
  {id:'p018',title:'Denim Jacket',brand:'Levis',category:'Outerwear',price:2599,mrp:3499,rating:4.5,images:['Images/product_18.jpg'],badges:[],sizes:['S','M','L'],colors:['Blue'],desc:'Classic denim jacket.'},
  {id:'p019',title:'Chiffon Anarkali',brand:'Biba',category:'Dresses',price:3499,mrp:4999,rating:4.6,images:['Images/product_19.jpg'],badges:['Exclusive'],sizes:['S','M','L'],colors:['Teal'],desc:'Flowing anarkali for special occasions.'},
  {id:'p020',title:'Leather Handbag',brand:'Hidesign',category:'Bags',price:4999,mrp:6999,rating:4.7,images:['Images/product_20.jpg'],badges:['Premium'],sizes:['Free'],colors:['Tan'],desc:'Genuine leather handbag.'},
  {id:'p021',title:'Ribbed Tank Top',brand:'H&M',category:'Innerwear',price:399,mrp:599,rating:4.0,images:['Images/product_21.jpg'],badges:[],sizes:['S','M','L'],colors:['Black','White'],desc:'Stretchy ribbed tank for layering.'},
  {id:'p022',title:'Cotton Nightdress',brand:'Clovia',category:'Nightwear',price:699,mrp:999,rating:4.1,images:['Images/product_22.jpg'],badges:[],sizes:['S','M','L'],colors:['Pink'],desc:'Comfortable cotton nightdress.'},
  {id:'p023',title:'Statement Necklace',brand:'Accessorize',category:'Jewellery',price:799,mrp:1299,rating:4.3,images:['Images/product_23.jpg'],badges:[],sizes:['Free'],colors:['Gold'],desc:'Bold necklace to elevate outfits.'},
  {id:'p024',title:'Pleated Palazzo',brand:'W for Woman',category:'Bottoms',price:1099,mrp:1499,rating:4.1,images:['Images/product_24.jpg'],badges:[],sizes:['S','M','L'],colors:['Black'],desc:'Comfortable soft pleated palazzo.'},
  {id:'p025',title:'Satin Midi Skirt',brand:'Forever New',category:'Skirts',price:1499,mrp:2199,rating:4.2,images:['Images/product_25.jpg'],badges:['Trending'],sizes:['S','M','L'],colors:['Champagne'],desc:'Satin midi skirt with graceful drape.'},
  {id:'p026',title:'Knit Cardigan',brand:'Global Desi',category:'Outerwear',price:1799,mrp:2399,rating:4.1,images:['Images/product_26.jpg'],badges:[],sizes:['S','M','L'],colors:['Mustard'],desc:'Cozy knit cardigan for layering.'},
  {id:'p027',title:'Polka Dot Shirt',brand:'Zara',category:'Tops',price:1199,mrp:1499,rating:4.0,images:['Images/product_27.jpg'],badges:[],sizes:['S','M','L'],colors:['White'],desc:'Classic polka dot shirt.'},
  {id:'p028',title:'Block Heel Sandals',brand:'Catwalk',category:'Footwear',price:2199,mrp:2999,rating:4.2,images:['Images/product_28.jpg'],badges:[],sizes:['6','7','8'],colors:['Nude'],desc:'Easy walk block heel sandals.'},
  {id:'p029',title:'Athleisure Joggers',brand:'Nike',category:'Bottoms',price:1599,mrp:2199,rating:4.3,images:['Images/product_29.jpg'],badges:[],sizes:['S','M','L'],colors:['Black'],desc:'Comfortable joggers for workouts & lounging.'},
  {id:'p030',title:'Pleated Midi Dress',brand:'AND',category:'Dresses',price:2599,mrp:3299,rating:4.4,images:['Images/product_30.jpg'],badges:['New Arrival'],sizes:['S','M','L'],colors:['Blush'],desc:'Elegant pleated midi dress.'},
  {id:'p031',title:'Embellished Clutch',brand:'Accessorize',category:'Bags',price:1299,mrp:1899,rating:4.2,images:['Images/product_31.jpg'],badges:[],sizes:['Free'],colors:['Gold'],desc:'Embellished clutch for evening events.'},
  {id:'p032',title:'Thermal Leggings',brand:'Clovia',category:'Innerwear',price:899,mrp:1199,rating:4.0,images:['Images/product_32.jpg'],badges:[],sizes:['S','M','L'],colors:['Black'],desc:'Warm thermal leggings.'},
  {id:'p033',title:'Floral Sundress',brand:'Forever New',category:'Dresses',price:1799,mrp:2399,rating:4.3,images:['Images/product_33.jpg'],badges:[],sizes:['S','M','L'],colors:['Yellow'],desc:'Sunny floral sundress.'},
  {id:'p034',title:'Canvas Tote Bag',brand:'H&M',category:'Bags',price:699,mrp:999,rating:4.1,images:['Images/product_34.jpg'],badges:[],sizes:['Free'],colors:['Natural'],desc:'Eco-friendly canvas tote.'},
  {id:'p035',title:'Faux Fur Coat',brand:'Zara',category:'Outerwear',price:4599,mrp:5999,rating:4.5,images:['Images/product_35.jpg'],badges:['Exclusive'],sizes:['S','M','L'],colors:['Cream'],desc:'Warm faux fur coat.'},
  {id:'p036',title:'Bright Hairband Set',brand:'Accessorize',category:'Accessories',price:299,mrp:499,rating:4.0,images:['Images/product_36.jpg'],badges:[],sizes:['Free'],colors:['Multi'],desc:'Set of colorful hairbands.'}
];

/* ========== Safe defaults & state ========== */
const discountProducts = []; // keep as empty array if not defined elsewhere
let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]'); // array of items
let wishlist = JSON.parse(localStorage.getItem('demo_wish') || '{}'); // object keyed by productId

let currentUser = null; // optional - used if your UI supports auth

let state = {
  q:'', category:'All', size:'All', color:'All', minPrice:null, maxPrice:null, sort:'popular', page:1,
  cart: JSON.parse(localStorage.getItem('demo_cart') || '{}'),
  wishlist: wishlist,
  shownProducts: [...products]
};

/* ========== DOM refs (guarded) ========== */
const cartIcon = document.getElementById('cart-btn') || document.querySelector('.cart-btn') || null;
const cartPreview = document.getElementById('cart-preview');
const cartCountEl = document.querySelector('.cart-count');
const cartItemsContainer = document.getElementById('cart-items');
const cartItemsCount = document.getElementById('cart-items-count');
const cartTotalElement = document.getElementById('cart-total');
const grid = document.getElementById('grid');
const resultCount = document.getElementById('result-count');
const loading = document.getElementById('v-toast'); // reuse toast element
const searchInput = document.getElementById('search');
const modalRoot = document.getElementById('modal-root') || document.createElement('div');

/* ========== Utils ========== */
const formatR = n => '₹' + Number(n||0).toLocaleString('en-IN');
const escapeHtml = s => String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const uniq = arr => [...new Set(arr)].filter(Boolean);
function shuffle(a){ for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]] } return a; }

function smallToast(msg){
  if(!loading){ console.log('toast:', msg); return; }
  loading.textContent = msg; loading.style.opacity = '1';
  setTimeout(()=> { if(loading) loading.style.opacity = '0'; }, 2200);
}

/* ========== Flying animation (uses image url) ========== */
function createFlyingAnimation(productImage, startElement) {
    if(!startElement || !cartIcon || !productImage) return;
    const flyingElement = document.createElement('div');
    flyingElement.style.cssText = `
        position: fixed;
        width: 40px;
        height: 40px;
        background-image: url('${productImage}');
        background-size: cover;
        background-position: center;
        border-radius: 50%;
        z-index: 1000;
        pointer-events: none;
    `;
    const startRect = startElement.getBoundingClientRect();
    flyingElement.style.left = `${startRect.left + startRect.width / 2 - 20}px`;
    flyingElement.style.top = `${startRect.top + startRect.height / 2 - 20}px`;
    document.body.appendChild(flyingElement);
    const cartRect = cartIcon.getBoundingClientRect();
    const endX = cartRect.left + cartRect.width / 2 - 20;
    const endY = cartRect.top + cartRect.height / 2 - 20;
    flyingElement.animate([
        { transform: 'translate(0, 0) scale(1) rotate(0deg)', opacity: 1, offset: 0 },
        { transform: `translate(${endX - startRect.left - startRect.width / 2 + 20}px, ${endY - startRect.top - startRect.height / 2 + 20}px) scale(0.3) rotate(360deg)`, opacity: 0, offset: 1 }
    ], {
        duration: 800,
        easing: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)'
    });
    setTimeout(()=> { flyingElement.remove(); }, 800);
}

/* ========== CART API (single source of truth) ========== */
/**
 * addToCart can be called as:
 *   addToCart(productObject, qty)
 *   addToCart(productId, qty)
 */
function addToCart(productOrId, qty = 1, startElement = null) {
  // resolve to product object
  let product = null;
  if (typeof productOrId === 'string' || typeof productOrId === 'number') {
    product = products.find(p => p.id == productOrId) || discountProducts.find(p => p.id == productOrId);
  } else {
    product = productOrId;
  }
  if (!product) {
    console.warn('addToCart: product not found for', productOrId);
    smallToast('Product not found');
    return;
  }

  // ensure cartItems is an array
  cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');

  const existing = cartItems.find(i => i.id === product.id);
  let imageUrl = (product.images && product.images[0]) || '';
  // Prefix image path with women folder for cart to find it correctly
  if (imageUrl && imageUrl.startsWith('Images/')) {
    imageUrl = '../women/' + imageUrl;
  }
  const title = product.title || '';

  if (existing) {
    existing.quantity = (existing.quantity || 1) + qty;
  } else {
    const priceVal = Number(product.price) || 0;
    cartItems.push({
      id: product.id,
      name: title,
      price: priceVal,
      image: imageUrl,
      quantity: qty
    });
  }

  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  updateCart();
  // flying animation (pass image and optional start element)
  createFlyingAnimation(imageUrl, startElement);
  smallToast(`${title} added to cart!`);
}

function removeFromCart(productId) {
  cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
  cartItems = cartItems.filter(item => item.id !== productId);
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  updateCart();
}

function updateCart() {
  cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
  const totalItems = cartItems.reduce((s, it) => s + (it.quantity || 0), 0);
  if (cartCountEl) cartCountEl.textContent = totalItems;
  if (!cartItemsContainer || !cartItemsCount || !cartTotalElement) return;

  if (cartItems.length === 0) {
    cartItemsContainer.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
    cartItemsCount.textContent = '0 items';
    cartTotalElement.textContent = '0.00';
    return;
  }

  cartItemsContainer.innerHTML = '';
  let total = 0;
  cartItems.forEach(item => {
    const itemTotal = (Number(item.price) || 0) * (item.quantity || 1);
    total += itemTotal;
    const cartItemElement = document.createElement('div');
    cartItemElement.className = 'cart-item';
    cartItemElement.innerHTML = `
      <img src="${item.image}" alt="${escapeHtml(item.name)}">
      <div class="cart-item-info">
          <div class="cart-item-name">${escapeHtml(item.name)}</div>
          <div class="cart-item-price">₹${(Number(item.price) || 0).toLocaleString('en-IN')} x ${item.quantity}</div>
      </div>
      <button class="cart-item-remove" data-id="${item.id}">
          <i class="fas fa-times"></i>
      </button>
    `;
    cartItemsContainer.appendChild(cartItemElement);
  });

  cartItemsCount.textContent = `${totalItems} ${totalItems === 1 ? 'item' : 'items'}`;
  cartTotalElement.textContent = total.toLocaleString('en-IN', { minimumFractionDigits: 2 });
}

/* ========== WISHLIST ========== */
function saveWishStorage(){
  localStorage.setItem('demo_wish', JSON.stringify(wishlist || {}));
}

function removeFromWishlist(productId){
  if(wishlist && wishlist[productId]) {
    delete wishlist[productId];
    saveWishStorage();
    // re-render grid icons if required
    renderGrid();
  }
}

/* ========== UI: attach events ========== */
if (cartIcon) {
  cartIcon.addEventListener('click', function(e) {
    e.stopPropagation();
    if (cartPreview) cartPreview.classList.toggle('active');
  });
}

// Global document click handlers (delegated)
document.addEventListener('click', function(e) {
  // cart remove
  if (e.target.closest('.cart-item-remove')) {
    const id = e.target.closest('.cart-item-remove').getAttribute('data-id');
    removeFromCart(id);
  }

  // move to cart from wishlist (button with class .move-to-cart)
  if (e.target.closest('.move-to-cart')) {
    const id = e.target.closest('.move-to-cart').getAttribute('data-id');
    const p = products.find(x=>x.id==id) || discountProducts.find(x=>x.id==id);
    if (p) {
      addToCart(p, 1);
      removeFromWishlist(id);
    }
  }

  // wishlist remove
  if (e.target.closest('.remove-from-wishlist')) {
    const id = e.target.closest('.remove-from-wishlist').getAttribute('data-id');
    removeFromWishlist(id);
  }
});

/* ========== GRID, FILTERS, RENDERING ========== */
/* DOM refs used by these functions (guarded above) */
const resultCountEl = resultCount;

/* populate chips */
function populateChips(){
  const catWrap = document.getElementById('cat-chips');
  if(catWrap){
    const cats = ['All', ...uniq(products.map(p=>p.category))];
    catWrap.innerHTML = '';
    cats.forEach(c=>{
      const b=document.createElement('button'); b.className='chip'+(c==='All'?' active':''); b.textContent=c;
      b.onclick=()=>{ state.category=c; updateChips(); applyFilters(); };
      catWrap.appendChild(b);
    });
  }

  const sizeWrap = document.getElementById('size-chips');
  if(sizeWrap){
    const sizes = ['All', ...uniq(products.flatMap(p=>p.sizes||[]))];
    sizeWrap.innerHTML = '';
    sizes.forEach(s=>{ const b=document.createElement('button'); b.className='chip'+(s==='All'?' active':''); b.textContent=s; b.onclick=()=>{ state.size=s; updateChips(); applyFilters(); }; sizeWrap.appendChild(b); });
  }

  const colorWrap = document.getElementById('color-chips');
  if(colorWrap){
    const colors = ['All', ...uniq(products.flatMap(p=>p.colors||[]))];
    colorWrap.innerHTML = '';
    colors.forEach(c=>{ const b=document.createElement('button'); b.className='chip'+(c==='All'?' active':''); b.textContent=c; b.onclick=()=>{ state.color=c; updateChips(); applyFilters(); }; colorWrap.appendChild(b); });
  }
}

function updateChips(){
  document.querySelectorAll('#cat-chips .chip').forEach(el=>el.classList.toggle('active', el.textContent===state.category));
  document.querySelectorAll('#size-chips .chip').forEach(el=>el.classList.toggle('active', el.textContent===state.size));
  document.querySelectorAll('#color-chips .chip').forEach(el=>el.classList.toggle('active', el.textContent===state.color));
}

/* controls attach */
function attachControls(){
  const sortEl = document.getElementById('sort');
  if(sortEl) sortEl.addEventListener('change', e=>{ state.sort=e.target.value; applyFilters(); });

  const applyPriceBtn = document.getElementById('applyPrice');
  if(applyPriceBtn) applyPriceBtn.addEventListener('click', ()=>{ state.minPrice = parseInt(document.getElementById('minPrice').value) || null; state.maxPrice = parseInt(document.getElementById('maxPrice').value) || null; applyFilters(); });

  const clearFiltersBtn = document.getElementById('clearFilters');
  if(clearFiltersBtn) clearFiltersBtn.addEventListener('click', ()=>{ state.q=''; if(searchInput) searchInput.value=''; state.category='All'; state.size='All'; state.color='All'; state.minPrice=null; state.maxPrice=null; const minEl=document.getElementById('minPrice'); const maxEl=document.getElementById('maxPrice'); if(minEl) minEl.value=''; if(maxEl) maxEl.value=''; updateChips(); applyFilters(); });

  const shuffleBtn = document.getElementById('shuffle');
  if(shuffleBtn) shuffleBtn.addEventListener('click', ()=>{ state.shownProducts = shuffle([...state.shownProducts]); renderGrid(); });

  if(searchInput) searchInput.addEventListener('input', (e)=>{ state.q = e.target.value; applyFilters(); });

  const checkoutBtn = document.getElementById('checkout');
  if(checkoutBtn) checkoutBtn.addEventListener('click', ()=>{ alert('Checkout placeholder — integrate payments later.'); });
}

/* filter & sort */
function applyFilters(){
  let list = [...products];
  if(state.q && state.q.trim()){
    const q=state.q.trim().toLowerCase();
    list = list.filter(p => (p.title + ' ' + p.brand + ' ' + p.category + ' ' + (p.desc||'')).toLowerCase().includes(q));
  }
  if(state.category && state.category !== 'All') list = list.filter(p => p.category === state.category);
  if(state.size && state.size !== 'All') list = list.filter(p => (p.sizes||[]).includes(state.size));
  if(state.color && state.color !== 'All') list = list.filter(p => (p.colors||[]).includes(state.color));
  if(state.minPrice != null) list = list.filter(p => p.price >= state.minPrice);
  if(state.maxPrice != null) list = list.filter(p => p.price <= state.maxPrice);

  if(state.sort === 'price_low') list.sort((a,b)=>a.price-b.price);
  else if(state.sort === 'price_high') list.sort((a,b)=>b.price-a.price);
  else if(state.sort === 'rating') list.sort((a,b)=> (b.rating||0)-(a.rating||0));
  else list.sort((a,b)=> (b.badges && b.badges.length?1:0) - (a.badges && a.badges.length?1:0));

  state.shownProducts = list;
  renderGrid();
}

/* render grid */
function renderGrid(){
  if(!grid) return;
  grid.innerHTML='';
  const list = state.shownProducts;
  if(resultCountEl) resultCountEl.textContent = 'Showing ' + list.length + ' products';
  if(list.length === 0){ grid.innerHTML = '<div style="grid-column:1/-1;color:var(--muted);padding:20px;background:rgba(255,255,255,0.02);border-radius:8px">No results</div>'; return; }

  list.forEach(p=>{
    const c = document.createElement('article'); c.className='card reveal';
    c.innerHTML = `
      <div class="img" tabindex="0" aria-hidden="true">
        <div class="badges"></div>
        <button class="wish" data-id="${p.id}" aria-label="Add to wishlist"><span class="heart">${state.wishlist[p.id] ? '❤️' : '♡'}</span></button>
        <img src="${p.images[0]}" alt="${escapeHtml(p.title)}" loading="lazy">
      </div>
      <div class="info">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <div style="flex:1">
            <div class="title">${escapeHtml(p.title)}</div>
            <div style="color:var(--muted);font-size:12px">${escapeHtml(p.brand)} · ${escapeHtml(p.category)}</div>
          </div>
          <div style="text-align:right">
            <div class="price">${formatR(p.price)}</div>
            <div class="mrp">${p.mrp?formatR(p.mrp):''}</div>
          </div>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px">
          <div style="color:var(--muted);font-size:12px">⭐ ${p.rating || '—'}</div>
          <div class="actions">
            <button class="btn add" data-id="${p.id}">Add to cart</button>
          </div>
        </div>
      </div>
    `;

    // badges
    const badgeWrap = c.querySelector('.badges');
    if(p.badges && p.badges.length){
      p.badges.slice(0,2).forEach(b => { const bd=document.createElement('span'); bd.className='badge'; bd.textContent=b; badgeWrap.appendChild(bd); });
    }

    // heart logic (with pop animation)
    const wishBtn = c.querySelector('.wish');
    wishBtn.classList.toggle('liked', !!state.wishlist[p.id]);
    wishBtn.addEventListener('click', (ev)=>{
      ev.stopPropagation();
      toggleWishWithPop(p.id, wishBtn);
    });

    // add to cart (we pass the startElement for flying animation)
    c.querySelector('.add').addEventListener('click', (ev)=> { 
      addToCart(p, 1, c.querySelector('img'));
    });

    // click image opens quick modal (small)
    c.querySelector('.img').addEventListener('click', ()=> openModal(p.id));

    grid.appendChild(c);
  });

  revealAll();
}

/* wishlist pop animation (keeps behaviour) */
function toggleWishWithPop(pid, el){
  if(state.wishlist[pid]){ delete state.wishlist[pid]; el.classList.remove('liked'); el.querySelector('.heart').textContent='♡'; wishlist = state.wishlist; saveWishStorage(); renderGrid(); return; }

  // add and animate
  state.wishlist[pid] = true;
  wishlist = state.wishlist;
  saveWishStorage();
  el.classList.add('liked'); el.querySelector('.heart').textContent='❤️';

  // create burst element
  const burst = document.createElement('div'); burst.className='burst'; el.appendChild(burst);
  burst.style.animation = 'burst-pop 520ms cubic-bezier(.2,.9,.3,1)';
  // small particle dots
  for(let i=0;i<5;i++){
    const dot = document.createElement('div'); dot.style.position='absolute'; dot.style.width='8px'; dot.style.height='8px'; dot.style.borderRadius='50%';
    dot.style.background = i%2? 'rgba(255,45,85,0.9)' : 'rgba(122,95,255,0.9)';
    dot.style.right = (6 + Math.random()*18) + 'px';
    dot.style.top = (6 + Math.random()*18) + 'px';
    dot.style.opacity = '0';
    el.appendChild(dot);
    dot.animate([
      { transform: 'translate(0,0) scale(0.6)', opacity:1 },
      { transform: `translate(${(Math.random()* -28) - 6}px, ${(Math.random()* -28) - 6}px) scale(0.8)`, opacity:0 }
    ], { duration:520 + Math.random()*160, easing:'cubic-bezier(.2,.9,.3,1)'});
    setTimeout(()=> dot.remove(), 700);
  }
  setTimeout(()=> { burst.remove(); }, 600);
}

/* quick modal for image/title */
function openModal(pid){
  const p = products.find(x=>x.id===pid);
  if(!p) return;
  if(!modalRoot.parentElement) document.body.appendChild(modalRoot); // ensure attached
  modalRoot.innerHTML = `
    <div class="modal-backdrop">
      <div class="modal-content">
        <div class="modal-image-container">
          <img src="${p.images[0]}" alt="${escapeHtml(p.title)}" style="width:100%;height:100%;object-fit:cover"/>
        </div>
        <div class="modal-info">
          <div style="display:flex;justify-content:space-between;align-items:flex-start">
            <h2 class="modal-title">${escapeHtml(p.title)}</h2>
            <div class="modal-rating">⭐ ${p.rating||'—'}</div>
          </div>
          <div class="modal-brand">${escapeHtml(p.brand)} · ${escapeHtml(p.category)}</div>
          <div class="modal-price">${formatR(p.price)} <span class="modal-mrp">${p.mrp?formatR(p.mrp):''}</span></div>
          <p class="modal-desc">${escapeHtml(p.desc||'')}</p>
          
          <div class="modal-options">
            <div class="option-group">
              <div class="option-label">SIZE</div>
              <div class="option-buttons">
                ${(p.sizes||[]).map(size=>`<button class="option-btn">${size}</button>`).join('')}
              </div>
            </div>
            <div class="option-group">
              <div class="option-label">COLOR</div>
              <div class="option-buttons">
                ${(p.colors||[]).map(color=>`<button class="option-btn">${color}</button>`).join('')}
              </div>
            </div>
          </div>
          
          <div class="modal-actions">
            <button id="modal-add" class="btn" style="flex:1">Add to cart</button>
            <button id="modal-close" class="modal-close">Close</button>
          </div>
        </div>
      </div>
    </div>
  `;
  const closeBtn = document.getElementById('modal-close');
  const addBtn = document.getElementById('modal-add');
  if(closeBtn) closeBtn.addEventListener('click', closeModal);
  if(addBtn) addBtn.addEventListener('click', ()=>{ 
    addToCart(p,1);
    addBtn.textContent = 'Added!';
    setTimeout(()=>{ if(document.getElementById('modal-add')) document.getElementById('modal-add').textContent='Add to cart'; }, 900); 
  });

  // size & color selection interactions
  const sizeButtons = modalRoot.querySelectorAll('.option-group:first-child .option-btn');
  sizeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      sizeButtons.forEach(b => b.style.background = 'rgba(255,255,255,0.05)');
      btn.style.background = 'rgba(122,95,255,0.2)';
      btn.style.borderColor = 'rgba(122,95,255,0.5)';
    });
  });
  const colorButtons = modalRoot.querySelectorAll('.option-group:last-child .option-btn');
  colorButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      colorButtons.forEach(b => b.style.background = 'rgba(255,255,255,0.05)');
      btn.style.background = 'rgba(255,122,182,0.2)';
      btn.style.borderColor = 'rgba(255,122,182,0.5)';
    });
  });

  document.querySelector('.modal-backdrop').addEventListener('click', (e)=>{ if(e.target.classList.contains('modal-backdrop')) closeModal(); });
  document.addEventListener('keyup', escClose);
}

function closeModal(){ modalRoot.innerHTML=''; document.removeEventListener('keyup', escClose); }
function escClose(e){ if(e.key === 'Escape') closeModal(); }

/* ========== Initialization ========== */
function renderCartCount(){
  const items = JSON.parse(localStorage.getItem('cartItems') || '[]');
  const total = items.reduce((s,i)=> s + (i.quantity||0), 0);
  if(cartCountEl) cartCountEl.textContent = total;
}

Object.keys(state.cart).forEach(k=>{ if(!products.find(p=>p.id===k)) delete state.cart[k]; });
Object.keys(state.wishlist).forEach(k=>{ if(!products.find(p=>p.id===k)) delete state.wishlist[k]; });
localStorage.setItem('demo_cart', JSON.stringify(state.cart));
localStorage.setItem('demo_wish', JSON.stringify(state.wishlist));

window.addEventListener('load', ()=> {
  populateChips();
  attachControls();
  applyFilters();
  renderCartCount();
  // initial cart render
  updateCart();
  revealAll();
});

/* reveal animation helper */
function revealAll(){ 
  document.querySelectorAll('.reveal').forEach((el,i)=> setTimeout(()=> el.classList.add('show'), 30*(i+1)) ); 
}