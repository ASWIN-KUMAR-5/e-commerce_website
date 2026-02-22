document.addEventListener('DOMContentLoaded', function() {
    // --- Data Variables ---
    
    // User authentication state
    let currentUser = null;

    // Cart state
    let cartItems = [];
    let cartTotal = 0;

    // Wishlist state
    let wishlistItems = [];

    // Product database for search functionality and category population
    const products = [
        { id: 1, name: "Classic White Shirt", price: "₹3,499", category: "men", image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80", badge: "New" },
        { id: 2, name: "Denim Jacket", price: "₹5,999", category: "men", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80", badge: "Sale" },
        { id: 3, name: "Floral Summer Dress", price: "₹4,499", category: "women", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80", badge: "Popular" },
        { id: 4, name: "Slim Fit Jeans", price: "₹5,299", category: "men", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80", badge: "New" },
        { id: 5, name: "Leather Handbag", price: "₹9,799", category: "women", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80", badge: "Luxury" },
        { id: 6, name: "Running Shoes", price: "₹6,799", category: "men", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80", badge: "Sale" },
        { id: 7, name: "Knit Sweater", price: "₹4,999", category: "women", image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1905&q=80", badge: "New" },
        { id: 8, name: "Casual Blazer", price: "₹7,499", category: "men", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80", badge: "Popular" },
        { id: 9, name: "Summer Shorts", price: "₹2,999", category: "kids", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80", badge: "Sale" },
        { id: 10, name: "Evening Gown", price: "₹11,299", category: "women", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80", badge: "Luxury" },
        { id: 11, name: "Sports Jacket", price: "₹6,499", category: "men", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80", badge: "New" },
        { id: 12, name: "Designer Handbag", price: "₹14,999", category: "women", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80", badge: "Luxury" },
        { id: 13, name: "Kids T-Shirt", price: "₹1,899", category: "kids", image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80", badge: "New" },
        { id: 14, name: "Kids Jeans", price: "₹2,699", category: "kids", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80", badge: "Popular" },
        { id: 15, name: "Kids Dress", price: "₹3,399", category: "kids", image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80", badge: "Sale" },
        { id: 16, name: "Men's Watch", price: "₹11,999", category: "men", image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1960&q=80", badge: "Luxury" },
        { id: 17, name: "Women's Heels", price: "₹6,799", category: "women", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80", badge: "New" },
        { id: 18, name: "Kids Sneakers", price: "₹3,799", category: "kids", image: "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", badge: "Popular" }
    ];

    // Discount products (with sale prices)
    const discountProducts = [
        { id: 2, name: "Denim Jacket", originalPrice: "₹7,499", salePrice: "₹5,999", discount: "20% OFF", category: "men", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80" },
        { id: 6, name: "Running Shoes", originalPrice: "₹8,999", salePrice: "₹6,799", discount: "25% OFF", category: "men", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80" },
        { id: 9, name: "Summer Shorts", originalPrice: "₹3,799", salePrice: "₹2,999", discount: "20% OFF", category: "kids", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" },
        { id: 15, name: "Kids Dress", originalPrice: "₹4,499", salePrice: "₹3,399", discount: "25% OFF", category: "kids", image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80" },
        { id: 5, name: "Leather Handbag", originalPrice: "₹11,999", salePrice: "₹9,799", discount: "19% OFF", category: "women", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80" },
        { id: 12, name: "Designer Handbag", originalPrice: "₹18,799", salePrice: "₹14,999", discount: "20% OFF", category: "women", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80" }
    ];

    // Carousel data with 7+ images - UPDATED with Women's page link
    const carouselItems = [
        {
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            title: "Summer Collection 2023",
            description: "Discover the latest trends and styles for the season with our exclusive summer collection",
            button: "Shop Now"
        },
        {
            image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            title: "Men's Essentials",
            description: "Upgrade your wardrobe with our premium collection of men's fashion",
            button: "Explore Men",
            link: "../men/men.html"
        },
        {
            image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            title: "Women's Fashion",
            description: "Express your style with our exclusive women's collection for every occasion",
            button: "Explore Women",
            link: "../women/Women.html"
        },
        {
            image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80",
            title: "Kids Collection",
            description: "Adorable and comfortable outfits for your little ones",
            button: "Shop Kids",
            link: "../kids/kids page.html"
        },
        {
            image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
            title: "Accessories",
            description: "Complete your look with our stylish accessories collection",
            button: "View Accessories"
        },
        {
            image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            title: "Seasonal Sale",
            description: "Up to 60% off on selected items. Limited time offer!",
            button: "Grab Deals"
        },
        {
            image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            title: "New Arrivals",
            description: "Be the first to shop our latest collection of fashion items",
            button: "Shop New"
        }
    ];

    // DOM Elements
    const authBtn = document.getElementById('auth-btn');
    const designersBtn = document.getElementById('designers-btn');
    const userProfile = document.getElementById('user-profile');
    const userAvatar = document.getElementById('user-avatar');
    const userName = document.getElementById('user-name');
    const profileDropdown = document.getElementById('profile-dropdown');
    const logoutBtn = document.getElementById('logout-btn');
    const wishlistBtn = document.getElementById('wishlist-btn');
    
    // --- *** KEY CHANGE HERE *** ---
    const cartIcon = document.getElementById('cart-btn'); // Changed from 'cart-icon' to 'cart-btn'
    // --- *** ---

    const cartPreview = document.getElementById('cart-preview');
    const cartCount = document.querySelector('.cart-count');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartItemsCount = document.getElementById('cart-items-count');
    const cartTotalElement = document.getElementById('cart-total');
    const backToTopBtn = document.getElementById('back-to-top');
    const wishlistModal = document.getElementById('wishlist-modal');
    const wishlistCloseModal = document.querySelector('.wishlist-close-modal');
    const wishlistItemsContainer = document.getElementById('wishlist-items');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');
    const carouselInner = document.getElementById('carousel-inner');
    const carouselIndicators = document.getElementById('carousel-indicators');
    const prevButton = document.getElementById('carousel-prev');
    const nextButton = document.getElementById('carousel-next');
    const authModal = document.getElementById('authModal');
    const closeModal = document.querySelector('.close-modal');
    const formTabs = document.querySelectorAll('.form-tab');
    const formPanels = document.querySelectorAll('.form-panel');
    const switchToSignup = document.querySelector('.switch-to-signup');
    const switchToLogin = document.querySelector('.switch-to-login');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    let currentIndex = 0;
    
    // --- Utility Functions ---

    // Notification function
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(to right, var(--primary), var(--secondary));
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); 
            z-index: 3000;
            animation: slideInRight 0.5s forwards, fadeOut 0.5s 2.5s forwards;
            font-weight: 600;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (document.body.contains(notification)) {
                 document.body.removeChild(notification);
            }
        }, 3000);
    }
    
    // Create flying animation when adding to cart
    function createFlyingAnimation(product) {
        const productElement = document.querySelector(`.add-to-cart[data-id="${product.id}"]`) ? 
                               document.querySelector(`.add-to-cart[data-id="${product.id}"]`).closest('.category-product') ||
                               document.querySelector(`.add-to-cart[data-id="${product.id}"]`).closest('.discount-product') : null;

        let startElement = productElement ? productElement.querySelector('img') : null;
        if (!startElement) return;

        const flyingElement = document.createElement('div');
        flyingElement.style.cssText = `
            position: fixed;
            width: 40px;
            height: 40px;
            background-image: url('${product.image}');
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
        
        const cartRect = cartIcon.getBoundingClientRect(); // cartIcon now refers to the button
        const endX = cartRect.left + cartRect.width / 2 - 20;
        const endY = cartRect.top + cartRect.height / 2 - 20;
        
        flyingElement.animate([
            {
                transform: 'translate(0, 0) scale(1) rotate(0deg)',
                opacity: 1,
                offset: 0
            },
            {
                transform: `translate(${endX - startRect.left - startRect.width / 2 + 20}px, ${endY - startRect.top - startRect.height / 2 + 20}px) scale(0.3) rotate(360deg)`,
                opacity: 0,
                offset: 1
            }
        ], {
            duration: 800,
            easing: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)'
        });
        
        setTimeout(() => {
            document.body.removeChild(flyingElement);
        }, 800);
    }
    
    // --- Authentication Logic ---

    function checkAuthStatus() {
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
            currentUser = JSON.parse(savedUser);
            updateUIForLoggedInUser();
        }
    }

    function updateUIForLoggedInUser() {
        authBtn.style.display = 'none';
        userProfile.style.display = 'flex';
        userName.textContent = currentUser.name;
        userAvatar.textContent = currentUser.name.charAt(0).toUpperCase();
    }

    function updateUIForLoggedOutUser() {
        authBtn.style.display = 'block';
        userProfile.style.display = 'none';
        currentUser = null;
        localStorage.removeItem('currentUser');
    }

    // --- Cart Logic ---

    // --- Cart Logic (Updated for full sync) ---
function addToCart(product) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        let priceString = product.salePrice || product.price;
        let priceValue = parseFloat(priceString.replace(/[₹,]/g, ''));

        cartItems.push({
            id: product.id,
            name: product.name,
            price: priceValue,
            image: product.image,
            quantity: 1
        });
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCart();
    createFlyingAnimation(product);
    showNotification(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems = cartItems.filter(item => item.id !== productId);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCart();
}

function updateCart() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const cartCount = document.querySelector('.cart-count');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartItemsCount = document.getElementById('cart-items-count');
    const cartTotalElement = document.getElementById('cart-total');

    if (cartCount) cartCount.textContent = totalItems;

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
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">₹${item.price.toLocaleString('en-IN')} x ${item.quantity}</div>
            </div>
            <button class="cart-item-remove" data-id="${item.id}">
                <i class="fas fa-times"></i>
            </button>
        `;
        cartItemsContainer.appendChild(cartItemElement);
    });

    if (cartItemsCount)
        cartItemsCount.textContent = `${totalItems} ${totalItems === 1 ? 'item' : 'items'}`;
    if (cartTotalElement)
        cartTotalElement.textContent = total.toLocaleString('en-IN', { minimumFractionDigits: 2 });
}

function loadCart() {
    const savedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    updateCart();
}


    // --- Wishlist Logic ---

    function addToWishlist(product) {
        const existingItem = wishlistItems.find(item => item.id === product.id);
        
        if (!existingItem) {
            wishlistItems.push({
                id: product.id,
                name: product.name,
                price: product.price || product.salePrice,
                image: product.image
            });
            
            updateWishlist();
            showNotification(`${product.name} added to wishlist!`);
        } else {
            showNotification(`${product.name} is already in your wishlist!`);
        }
    }

    function removeFromWishlist(productId) {
        wishlistItems = wishlistItems.filter(item => item.id !== productId);
        updateWishlist();
    }

    function updateWishlist() {
        if (wishlistItems.length === 0) {
            wishlistItemsContainer.innerHTML = '<div class="empty-wishlist">Your wishlist is empty</div>';
        } else {
            wishlistItemsContainer.innerHTML = '';
            
            wishlistItems.forEach(item => {
                const wishlistItemElement = document.createElement('div');
                wishlistItemElement.className = 'wishlist-item';
                wishlistItemElement.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="wishlist-item-info">
                        <div class="wishlist-item-name">${item.name}</div>
                        <div class="wishlist-item-price">${item.price}</div>
                    </div>
                    <div class="wishlist-item-actions">
                        <button class="move-to-cart" data-id="${item.id}">Add to Cart</button>
                        <button class="remove-from-wishlist" data-id="${item.id}">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                `;
                wishlistItemsContainer.appendChild(wishlistItemElement);
            });
        }
        
        localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
    }

    function loadWishlist() {
        const savedWishlist = localStorage.getItem('wishlistItems');
        if (savedWishlist) {
            try {
                wishlistItems = JSON.parse(savedWishlist);
            } catch (e) {
                console.error("Error parsing wishlist data from localStorage:", e);
                wishlistItems = [];
            }
            updateWishlist();
        }
    }
    
    // --- Sale Timer ---
    
    function updateSaleTimer() {
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + 3);
        endDate.setHours(23, 59, 59, 0);
        
        function update() {
            const now = new Date();
            const timeLeft = endDate - now;
            
            const daysElement = document.getElementById('days');
            const hoursElement = document.getElementById('hours');
            const minutesElement = document.getElementById('minutes');
            const secondsElement = document.getElementById('seconds');

            if (timeLeft < 0) {
                if(daysElement) daysElement.textContent = '00';
                if(hoursElement) hoursElement.textContent = '00';
                if(minutesElement) minutesElement.textContent = '00';
                if(secondsElement) secondsElement.textContent = '00';
                return;
            }
            
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            
            if(daysElement) daysElement.textContent = days.toString().padStart(2, '0');
            if(hoursElement) hoursElement.textContent = hours.toString().padStart(2, '0');
            if(minutesElement) minutesElement.textContent = minutes.toString().padStart(2, '0');
            if(secondsElement) secondsElement.textContent = seconds.toString().padStart(2, '0');
        }
        
        update();
        setInterval(update, 1000);
    }

    // --- Search Functionality ---
    
    function performSearch(query) {
        if (query.length < 2) {
            searchResults.classList.remove('active');
            return;
        }

        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(query.toLowerCase()) || 
            product.category.toLowerCase().includes(query.toLowerCase())
        );

        displaySearchResults(filteredProducts);
    }

    function displaySearchResults(results) {
        searchResults.innerHTML = '';

        if (results.length === 0) {
            searchResults.innerHTML = '<div class="search-result-item">No products found</div>';
        } else {
            results.forEach(product => {
                const resultItem = document.createElement('div');
                resultItem.className = 'search-result-item';
                resultItem.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <div class="search-result-info">
                        <h4>${product.name}</h4>
                        <p>${product.price}</p>
                    </div>
                `;
                resultItem.addEventListener('click', () => {
                    searchInput.value = product.name;
                    searchResults.classList.remove('active');
                    
                    const categorySection = document.getElementById(`${product.category}-section`);
                    if (categorySection) {
                        categorySection.scrollIntoView({ behavior: 'smooth' });
                    }
                });
                searchResults.appendChild(resultItem);
            });
        }

        searchResults.classList.add('active');
    }

    // --- Carousel functionality ---
    
    function initCarousel() {
        if (!carouselInner || !carouselIndicators) return;

        carouselItems.forEach((item, index) => {
            const carouselItem = document.createElement('div');
            carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
            carouselItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="carousel-caption">
                    <h2>${item.title}</h2>
                    <p>${item.description}</p>
                    <button ${item.link ? `onclick="window.location.href='${item.link}'"` : ''}>${item.button}</button>
                </div>
            `;
            carouselInner.appendChild(carouselItem);
            
            const indicator = document.createElement('span');
            indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
            indicator.addEventListener('click', () => {
                currentIndex = index;
                updateCarousel();
            });
            carouselIndicators.appendChild(indicator);
        });
    }
    
    function updateCarousel() {
        if (!carouselInner) return;
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        document.querySelectorAll('.indicator').forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        updateCarousel();
    }

    // --- Discount Slider ---

    function initDiscountSlider() {
        const discountProductsContainer = document.getElementById('discount-products');
        
        if (!discountProductsContainer) return;

        discountProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'discount-product';
            productElement.innerHTML = `
                <div class="discount-badge">${product.discount}</div>
                <div class="discount-product-img">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="discount-product-info">
                    <h3 class="discount-product-title">${product.name}</h3>
                    <div class="discount-product-price">
                        <span class="original-price">${product.originalPrice}</span>
                        <span class="sale-price">${product.salePrice}</span>
                    </div>
                    <div class="discount-product-actions">
                        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                        <button class="wishlist" data-id="${product.id}"><i class="far fa-heart"></i></button>
                    </div>
                </div>
            `;
            discountProductsContainer.appendChild(productElement);
        });
        
        setupDiscountNavigation();
    }
    
    function setupDiscountNavigation() {
        const prevBtn = document.querySelector('.discount-prev');
        const nextBtn = document.querySelector('.discount-next');
        const container = document.getElementById('discount-products');
        
        if (!prevBtn || !nextBtn || !container) return;

        let scrollPosition = 0;
        const scrollAmount = 300;
        
        prevBtn.addEventListener('click', () => {
            scrollPosition = Math.max(scrollPosition - scrollAmount, 0);
            container.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        });
        
        nextBtn.addEventListener('click', () => {
            scrollPosition = Math.min(scrollPosition + scrollAmount, container.scrollWidth - container.clientWidth);
            container.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        });
    }

    // --- Category Sections ---
    
    function initCategorySections() {
        const menProducts = document.getElementById('men-products');
        const womenProducts = document.getElementById('women-products');
        const kidsProducts = document.getElementById('kids-products');
        
        if (!menProducts || !womenProducts || !kidsProducts) return;

        const menItems = products.filter(p => p.category === 'men');
        const womenItems = products.filter(p => p.category === 'women');
        const kidsItems = products.filter(p => p.category === 'kids');
        
        populateCategorySection(menProducts, menItems);
        populateCategorySection(womenProducts, womenItems);
        populateCategorySection(kidsProducts, kidsItems);
        
        setupCategoryNavigation('men', menProducts);
        setupCategoryNavigation('women', womenProducts);
        setupCategoryNavigation('kids', kidsProducts);
    }
    
    function populateCategorySection(container, items) {
        container.innerHTML = '';
        items.forEach(item => {
            const productElement = document.createElement('div');
            productElement.className = 'category-product';
            productElement.innerHTML = `
                <div class="category-product-img">
                    <img src="${item.image}" alt="${item.name}">
                    <span class="product-badge">${item.badge}</span>
                </div>
                <div class="category-product-info">
                    <h3 class="category-product-title">${item.name}</h3>
                    <p class="category-product-price">${item.price}</p>
                    <div class="category-product-actions">
                        <button class="add-to-cart" data-id="${item.id}">Add to Cart</button>
                        <button class="wishlist" data-id="${item.id}"><i class="far fa-heart"></i></button>
                    </div>
                </div>
            `;
            container.appendChild(productElement);
        });
    }
    
    function setupCategoryNavigation(category, container) {
        const prevBtn = document.querySelector(`.${category}-prev`);
        const nextBtn = document.querySelector(`.${category}-next`);
        
        if (!prevBtn || !nextBtn || !container) return;

        let scrollPosition = 0;
        const scrollAmount = 300;
        
        prevBtn.addEventListener('click', () => {
            scrollPosition = Math.max(scrollPosition - scrollAmount, 0);
            container.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        });
        
        nextBtn.addEventListener('click', () => {
            scrollPosition = Math.min(scrollPosition + scrollAmount, container.scrollWidth - container.clientWidth);
            container.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        });
    }
    
    // --- Event Listeners ---

    // Toggle profile dropdown
    userProfile.addEventListener('click', function(e) {
        e.stopPropagation();
        profileDropdown.classList.toggle('active');
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        profileDropdown.classList.remove('active');
        if (!e.target.closest('.cart-container')) {
            cartPreview.classList.remove('active');
        }
        if (!e.target.closest('.search-bar')) {
            searchResults.classList.remove('active');
        }
    });

    // Logout functionality
    logoutBtn.addEventListener('click', function(e) {
        e.preventDefault();
        updateUIForLoggedOutUser();
        profileDropdown.classList.remove('active');
    });

    // Wishlist modal controls
    wishlistBtn.addEventListener('click', function(e) {
        e.preventDefault();
        wishlistModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        profileDropdown.classList.remove('active');
    });

    wishlistCloseModal.addEventListener('click', function() {
        wishlistModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', function(e) {
        if (e.target === wishlistModal) {
            wishlistModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Cart and Wishlist general actions
    cartIcon.addEventListener('click', function(e) { // cartIcon now points to the button
        e.stopPropagation();
        cartPreview.classList.toggle('active');
    });

    document.addEventListener('click', function(e) {
        // Remove item from cart
        if (e.target.closest('.cart-item-remove')) {
            const productId = parseInt(e.target.closest('.cart-item-remove').getAttribute('data-id'));
            removeFromCart(productId);
        }
        
        // Move item from wishlist to cart
        if (e.target.closest('.move-to-cart')) {
            const productId = parseInt(e.target.closest('.move-to-cart').getAttribute('data-id'));
            const product = products.find(p => p.id === productId) || 
                           discountProducts.find(p => p.id === productId);
            
            if (product) {
                addToCart(product);
                removeFromWishlist(productId);
            }
        }
        
        // Remove item from wishlist
        if (e.target.closest('.remove-from-wishlist')) {
            const productId = parseInt(e.target.closest('.remove-from-wishlist').getAttribute('data-id'));
            removeFromWishlist(productId);
        }
        
        // Add to cart event listener for all 'add-to-cart' buttons
        if (e.target.classList.contains('add-to-cart') || e.target.closest('.add-to-cart')) {
            const button = e.target.classList.contains('add-to-cart') ? e.target : e.target.closest('.add-to-cart');
            const productId = parseInt(button.getAttribute('data-id'));
            
            const product = products.find(p => p.id === productId) || 
                           discountProducts.find(p => p.id === productId);
            
            if (product) {
                addToCart(product);
                
                const originalText = button.textContent;
                const originalBg = button.style.backgroundColor;

                button.textContent = 'Added!';
                button.style.backgroundColor = 'var(--primary)';
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.backgroundColor = originalBg; 
                }, 1000);
            }
        }
        
        // Wishlist button functionality for all 'wishlist' buttons
        if (e.target.classList.contains('wishlist') || e.target.closest('.wishlist')) {
            const button = e.target.classList.contains('wishlist') ? e.target : e.target.closest('.wishlist');
            const productId = parseInt(button.getAttribute('data-id'));
            
            const product = products.find(p => p.id === productId) || 
                           discountProducts.find(p => p.id === productId);
            
            if (product) {
                addToWishlist(product);
                
                button.classList.toggle('active');
                
                const icon = button.querySelector('i');
                if (button.classList.contains('active')) {
                    icon.classList.remove('far');
                    icon.classList.add('fas');
                } else {
                    icon.classList.remove('fas');
                    icon.classList.add('far');
                }
            }
        }
    });

    // Search bar listeners
    searchInput.addEventListener('input', (e) => {
        performSearch(e.target.value);
    });

    searchButton.addEventListener('click', () => {
        performSearch(searchInput.value);
    });

    // Carousel button listeners
    if (nextButton) nextButton.addEventListener('click', nextSlide);
    if (prevButton) prevButton.addEventListener('click', prevSlide);
    
    // Auto slide carousel
    if (carouselItems.length > 1) {
        setInterval(nextSlide, 6000);
    }
    
    // Modal controls
    if(authBtn && authModal) {
        authBtn.addEventListener('click', () => {
            authModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    }
    
    if(closeModal && authModal) {
        closeModal.addEventListener('click', () => {
            authModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    window.addEventListener('click', (e) => {
        if (e.target === authModal) {
            authModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    formTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.getAttribute('data-tab');
            
            formTabs.forEach(t => t.classList.remove('active'));
            formPanels.forEach(p => p.classList.remove('active'));
            
            tab.classList.add('active');
            const panel = document.getElementById(`${tabName}-panel`);
            if(panel) panel.classList.add('active');
        });
    });
    
    if(switchToSignup) {
        switchToSignup.addEventListener('click', (e) => {
            e.preventDefault();
            formTabs.forEach(t => t.classList.remove('active'));
            formPanels.forEach(p => p.classList.remove('active'));
            
            const signupTab = document.querySelector('[data-tab="signup"]');
            const signupPanel = document.getElementById('signup-panel');

            if(signupTab) signupTab.classList.add('active');
            if(signupPanel) signupPanel.classList.add('active');
        });
    }
    
    if(switchToLogin) {
        switchToLogin.addEventListener('click', (e) => {
            e.preventDefault();
            formTabs.forEach(t => t.classList.remove('active'));
            formPanels.forEach(p => p.classList.remove('active'));
            
            const loginTab = document.querySelector('[data-tab="login"]');
            const loginPanel = document.getElementById('login-panel');
            
            if(loginTab) loginTab.classList.add('active');
            if(loginPanel) loginPanel.classList.add('active');
        });
    }
    
    // Form submission
    if(loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const name = email.split('@')[0];
            
            currentUser = { name: name, email: email };
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            
            updateUIForLoggedInUser();
            if(authModal) authModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            
            showNotification(`Welcome back, ${name}!`);
        });
    }
    
    if(signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('signup-name').value;
            const email = document.getElementById('signup-email').value;
            
            currentUser = { name: name, email: email };
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            
            updateUIForLoggedInUser();
            if(authModal) authModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            
            showNotification(`Welcome to StyleVibe, ${name}!`);
        });
    }
    
    // Back to Top Button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Animation on Scroll Logic (Fade In)
    const fadeElements = document.querySelectorAll('.category-card, .offer-card, .section-title, .category-product, .discount-product');
    
    const fadeInOnScroll = () => {
        fadeElements.forEach(element => {
            if (element.classList.contains('fade-in')) return; 

            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('fade-in');
            }
        });
    };
    
    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll(); // Initial check

    // --- Initialization Calls ---

    initCarousel();
    initDiscountSlider();
    initCategorySections();
    checkAuthStatus();
    loadCart();
    loadWishlist();
    updateSaleTimer();
});

// --- Handle "View Cart" button click ---
document.addEventListener('click', (e) => {
    const viewCartBtn = e.target.closest('.view-cart-btn');
    if (viewCartBtn) {
        e.preventDefault();
        window.location.href = '../cart/cart.html';
    }
});