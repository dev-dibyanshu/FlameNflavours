// Cart state
let cart = JSON.parse(localStorage.getItem('flameCart')) || [];

// DOM Elements
const menuGrid = document.getElementById('menuGrid');
const cartBtn = document.getElementById('cartBtn');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const checkoutBtn = document.getElementById('checkoutBtn');
const toast = document.getElementById('toast');
const filterBtns = document.querySelectorAll('.filter-btn');

// Checkout Modal Elements
const checkoutModal = document.getElementById('checkoutModal');
const checkoutModalOverlay = document.getElementById('checkoutModalOverlay');
const closeModal = document.getElementById('closeModal');
const checkoutForm = document.getElementById('checkoutForm');
const confirmOrderBtn = document.getElementById('confirmOrderBtn');
const customerName = document.getElementById('customerName');
const customerAddress = document.getElementById('customerAddress');
const customerNote = document.getElementById('customerNote');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderMenu('all');
    updateCart();
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    cartBtn.addEventListener('click', openCart);
    closeCart.addEventListener('click', closeCartDrawer);
    cartOverlay.addEventListener('click', closeCartDrawer);
    checkoutBtn.addEventListener('click', openCheckoutModal);
    
    // Checkout Modal
    closeModal.addEventListener('click', closeCheckoutModal);
    checkoutModalOverlay.addEventListener('click', closeCheckoutModal);
    checkoutForm.addEventListener('submit', handleCheckout);
    
    // Form Validation
    customerName.addEventListener('input', validateForm);
    customerAddress.addEventListener('input', validateForm);
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.dataset.category;
            renderMenu(category);
        });
    });
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Render Menu
function renderMenu(category) {
    const filteredMenu = category === 'all' 
        ? menuData 
        : menuData.filter(item => item.category === category);
    
    menuGrid.innerHTML = filteredMenu.map(item => `
        <div class="menu-item" data-category="${item.category}">
            <img src="${item.image}" alt="${item.name}" class="menu-item-image">
            <div class="menu-item-content">
                <h3 class="menu-item-name">${item.name}</h3>
                <p class="menu-item-desc">${item.description}</p>
                <div class="menu-item-footer">
                    <span class="menu-item-price">₹${item.price}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${item.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Add to Cart
function addToCart(itemId) {
    const item = menuData.find(i => i.id === itemId);
    const existingItem = cart.find(i => i.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    
    saveCart();
    updateCart();
    showToast(`${item.name} added to cart!`);
    
    // Add animation to button
    const btn = event.target;
    btn.classList.add('added');
    setTimeout(() => btn.classList.remove('added'), 500);
}

// Update Cart Display
function updateCart() {
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        cartTotal.textContent = '₹0';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">₹${item.price}</div>
                <div class="cart-item-controls">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="cart-item-qty">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `₹${total}`;
}

// Update Quantity
function updateQuantity(itemId, change) {
    const item = cart.find(i => i.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            saveCart();
            updateCart();
        }
    }
}

// Remove from Cart
function removeFromCart(itemId) {
    cart = cart.filter(i => i.id !== itemId);
    saveCart();
    updateCart();
    showToast('Item removed from cart');
}

// Save Cart to LocalStorage
function saveCart() {
    localStorage.setItem('flameCart', JSON.stringify(cart));
}

// Open Cart
function openCart() {
    cartDrawer.classList.add('active');
    cartOverlay.classList.add('active');
}

// Close Cart
function closeCartDrawer() {
    cartDrawer.classList.remove('active');
    cartOverlay.classList.remove('active');
}

// Open Checkout Modal
function openCheckoutModal() {
    if (cart.length === 0) {
        showToast('Your cart is empty!');
        return;
    }
    
    checkoutModal.classList.add('active');
    checkoutModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Checkout Modal
function closeCheckoutModal() {
    checkoutModal.classList.remove('active');
    checkoutModalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
    checkoutForm.reset();
    clearErrors();
    confirmOrderBtn.disabled = true;
}

// Validate Form
function validateForm() {
    let isValid = true;
    
    // Name validation
    const nameValue = customerName.value.trim();
    const nameError = document.getElementById('nameError');
    if (nameValue.length < 2) {
        nameError.textContent = 'Name must be at least 2 characters';
        customerName.classList.add('error');
        isValid = false;
    } else {
        nameError.textContent = '';
        customerName.classList.remove('error');
    }
    
    // Address validation
    const addressValue = customerAddress.value.trim();
    const addressError = document.getElementById('addressError');
    if (addressValue.length < 10) {
        addressError.textContent = 'Address must be at least 10 characters';
        customerAddress.classList.add('error');
        isValid = false;
    } else {
        addressError.textContent = '';
        customerAddress.classList.remove('error');
    }
    
    confirmOrderBtn.disabled = !isValid;
    return isValid;
}

// Clear Errors
function clearErrors() {
    document.getElementById('nameError').textContent = '';
    document.getElementById('addressError').textContent = '';
    customerName.classList.remove('error');
    customerAddress.classList.remove('error');
}

// Handle Checkout
function handleCheckout(e) {
    e.preventDefault();
    
    if (!validateForm()) {
        return;
    }
    
    // Generate WhatsApp message
    let message = '*Hello Flame & Flavour!*\n';
    message += 'I would like to place an order:\n\n';
    message += '*ORDER DETAILS:*\n';
    message += '----------------------------\n';
    
    cart.forEach(item => {
        message += `${item.name}\n`;
        message += `Qty: ${item.quantity} x Rs.${item.price} = Rs.${item.price * item.quantity}\n\n`;
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += '----------------------------\n';
    message += `*TOTAL: Rs.${total}*\n\n`;
    
    message += '*CUSTOMER DETAILS:*\n';
    message += `Name: ${customerName.value.trim()}\n`;
    message += `Address: ${customerAddress.value.trim()}\n`;
    
    if (customerNote.value.trim()) {
        message += `\n*Special Instructions:*\n${customerNote.value.trim()}`;
    }
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917505334931?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Clear cart and close modals
    setTimeout(() => {
        cart = [];
        saveCart();
        updateCart();
        closeCheckoutModal();
        closeCartDrawer();
        showToast('Order sent! We\'ll contact you soon.');
    }, 500);
}

// Show Toast Notification
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
