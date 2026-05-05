// =================== PRODUCT DATA ===================
const handmadeBouquet = [
  { id: 11, name: "Jewllery Bouquet", price: 649, img: "./assets/b1.jpeg", desc: "Customisation available. Price may vary after customisation. Contact on Whatsapp for Queries. (Starting at price mentioned)" },
  { id: 12, name: "Chocolates and Flowers", price: 350, img: "./assets/b2.jpeg", desc: "Customisation available. Price may vary after customisation. Contact on Whatsapp for Queries. (Starting at price mentioned)" },
  { id: 13, name: "Accessories with Chocolates", price: 399, img: "./assets/b3.jpeg", desc: "Customisation available. Price may vary after customisation. Contact on Whatsapp for Queries. (Starting at price mentioned)" },
  { id: 14, name: "Chocolate Bouquet", price: 350, img: "./assets/b4.jpeg", desc: "Customisation available. Price may vary after customisation. Contact on Whatsapp for Queries. (Starting at price mentioned)" },
  { id: 15, name: "Personalized Bouquet", price: 550, img: "./assets/b5.jpeg", desc: "Customisation available. Price may vary after customisation. Contact on Whatsapp for Queries. (Starting at price mentioned)" },
  { id: 16, name: "Chocolates with Accessories", price: 1250, img: "./assets/b6.jpeg", desc: "Customisation available. Price may vary after customisation. Contact on Whatsapp for Queries. (Starting at price mentioned)" },
  { id: 17, name: "Photo, Chocolate and Flower", price: 1399, img: "./assets/b7.jpeg", desc: "Customisation available. Price may vary after customisation. Contact on Whatsapp for Queries. (Starting at price mentioned)" },
];
const personalisedFrames = [
  { id: 100, name: "Popup multicolour frame", price: 250, img: "./assets/frame1.jpeg", desc: "Customisation available. Price may vary after customisation. Contact on Whatsapp for Queries. (Starting at price mentioned)" },
  { id: 200, name: "Popup black and white frame", price: 250, img: "./assets/frame2.jpeg", desc: "Customisation available. Price may vary after customisation. Contact on Whatsapp for Queries. (Starting at price mentioned)" },
  { id: 300, name: "Personalised frame", price: 250, img: "./assets/frame3.jpeg", desc: "Customisation available. Price may vary after customisation. Contact on Whatsapp for Queries. (Starting at price mentioned)" },
  { id: 400, name: "Memory frame", price: 250, img: "./assets/frame4.jpeg", desc: "Customisation available. Price may vary after customisation. Contact on Whatsapp for Queries. (Starting at price mentioned)" },
];
const boxHamper = [
  { id: 201, name: "Jewellery and Chocolates", price: 1550, img: "./assets/bh1.jpeg", desc: "Customisation available. Price may vary after customisation. Contact on Whatsapp for Queries. (Starting at price mentioned)" },
  { id: 202, name: "Shirt, Watch, Deo ad Frame", price: 499, img: "./assets/bh2.jpeg", desc: "Customisation available. Price may vary after customisation. Contact on Whatsapp for Queries. (Starting at price mentioned)" },
  { id: 203, name: "Shrit, Glass, Watch, Deo, Frame, and Keychain", price: 999, img: "./assets/bh3.jpeg", desc: "Customisation available. Price may vary after customisation. Contact on Whatsapp for Queries. (Starting at price mentioned)" },
];
const gifts = [
  { id: 1, name: "Personalized Wallet", price: 199, img: "./assets/wallet.jpg", desc: "Premium leather wallet engraved with a name or message of your choice." },
  { id: 2, name: "Name Kada", price: 249, img: "./assets/kada.jpg", desc: "Elegant metal kada bracelet customized with your name." },
  { id: 3, name: "LED Table Top", price: 799, img: "./assets/led.jpg", desc: "Illuminated acrylic LED table top, perfect for gifting or home decor." },
  { id: 4, name: "Name Temperature Bottle", price: 449, img: "./assets/tmp-bottle.jpg", desc: "Insulated bottle with your name printed — keeps drinks hot or cold for hours." },
  { id: 5, name: "Photo Frame", price: 349, img: "./assets/frame.jpg", desc: "Beautiful customized photo frame, ideal for anniversaries and birthdays." },
  { id: 6, name: "Customized Pens", price: 189, img: "./assets/pen.jpg", desc: "Premium pens engraved with a name or logo — great for corporate gifting." },
  { id: 7, name: "Bracelet With Name", price: 220, img: "./assets/bracelet.jpg", desc: "Stylish bracelet personalized with your loved one's name." },
  { id: 8, name: "Combo of 3", price: 549, img: "./assets/combo.jpg", desc: "A bundle of 3 bestselling personalized items — best value combo!" },
];

const printables = [
  { id: 101, name: "Printed T-Shirt", price: 249, img: "./assets/t-shirt.jpg", desc: "High-quality DTF/sublimation printed t-shirt with your custom design or photo." },
  { id: 102, name: "Custom Mouse Pad", price: 199, img: "./assets/mouse-pad.jpg", desc: "Full-color printed mouse pad — great for desks and gaming setups." },
  { id: 103, name: "Photo Mug", price: 249, img: "./assets/mug.jpg", desc: "Ceramic mug printed with your photo or artwork — perfect everyday gift." },
  { id: 104, name: "Visiting Card", price: 349, img: "./assets/visiting-card.jpg", desc: "Professional visiting cards with custom design — pack of 100." },
];

// =================== CART STATE ===================
let cart = [];
let currentProduct = null;
let currentQty = 1;

// =================== RENDER PRODUCTS ===================
function renderProducts(list, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

const itemsPerRow = 4;
  const total = list.length;
  const fullRows = Math.floor(total / itemsPerRow);
  const remainder = total % itemsPerRow;

  let html = '';

  // Full rows (3 cards each)
  for (let r = 0; r < fullRows; r++) {
    html += `<div class="product-row">`;
    for (let i = r * itemsPerRow; i < r * itemsPerRow + itemsPerRow; i++) {
      html += productCard(list[i]);
    }
    html += `</div>`;
  }

  // Last partial row — centered (pyramid effect)
  if (remainder > 0) {
    html += `<div class="product-row product-row-centered">`;
    for (let i = fullRows * itemsPerRow; i < total; i++) {
      html += productCard(list[i]);
    }
    html += `</div>`;
  }

  container.innerHTML = html;
}

function productCard(p) {
  return `
    <div class="product" onclick="openProduct(${p.id})">
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        <div class="product-overlay">
          <span class="view-btn">View & Add</span>
        </div>
      </div>
      <h3>${p.name}</h3>
      <p class="price-text">₹${p.price}</p>
      <button class="btn quick-add-btn mt-1" onclick="event.stopPropagation(); quickAdd(${p.id})">
        <i class="bi bi-bag-plus"></i> Add to Cart
      </button>
    </div>
  `;
}

// =================== PRODUCT MODAL ===================
function openProduct(id) {
  const all = [...gifts, ...printables, ...handmadeBouquet, ...personalisedFrames, ...boxHamper];
  const p = all.find(x => x.id === id);
  if (!p) return;
  currentProduct = p;
  currentQty = 1;
  document.getElementById('modalImg').src = p.img;
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalPrice').textContent = `₹${p.price}`;
  document.getElementById('modalDesc').textContent = p.desc;
  document.getElementById('modalQty').textContent = 1;
  document.getElementById('customMsg').value = '';
  new bootstrap.Modal(document.getElementById('productModal')).show();
}

function changeQty(delta) {
  currentQty = Math.max(1, currentQty + delta);
  document.getElementById('modalQty').textContent = currentQty;
}

function addToCartFromModal() {
  if (!currentProduct) return;
  const note = document.getElementById('customMsg').value.trim();
  addToCart(currentProduct, currentQty, note);
  bootstrap.Modal.getInstance(document.getElementById('productModal')).hide();
  showToast(`${currentProduct.name} added to cart!`);
}

function quickAdd(id) {
  // ✅ Fixed: search ALL arrays so bouquet/frames/hamper cards also work
  const all = [...gifts, ...printables, ...handmadeBouquet, ...personalisedFrames, ...boxHamper];
  const p = all.find(x => x.id === id);
  if (!p) return;
  addToCart(p, 1, '');
  showToast(`${p.name} added to cart!`);
}

// =================== CART LOGIC ===================
function addToCart(product, qty, note) {
  const existing = cart.find(i => i.id === product.id && i.note === note);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...product, qty, note });
  }
  updateCartUI();
}

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById('cartCount');
  if (count > 0) {
    badge.style.display = 'inline';
    badge.textContent = count;
  } else {
    badge.style.display = 'none';
  }

  const cartItemsEl = document.getElementById('cartItems');
  const cartFooterEl = document.getElementById('cartFooter');
  const cartTotalEl = document.getElementById('cartTotal');

  if (cart.length === 0) {
    cartItemsEl.innerHTML = `<div class="text-center py-5 text-muted"><i class="bi bi-bag fs-1 d-block mb-3"></i>Your cart is empty</div>`;
    cartFooterEl.style.display = 'none';
  } else {
    cartItemsEl.innerHTML = cart.map((item, idx) => `
      <div class="cart-item d-flex align-items-start gap-3 mb-3 pb-3 border-bottom">
        <img src="${item.img}" alt="${item.name}" class="cart-thumb rounded-2">
        <div class="flex-grow-1">
          <div class="fw-semibold">${item.name}</div>
          ${item.note ? `<div class="text-muted small fst-italic">"${item.note}"</div>` : ''}
          <div class="d-flex align-items-center gap-2 mt-1">
            <button class="btn btn-outline-secondary btn-sm py-0 px-2" onclick="updateCartQty(${idx}, -1)">−</button>
            <span class="small">${item.qty}</span>
            <button class="btn btn-outline-secondary btn-sm py-0 px-2" onclick="updateCartQty(${idx}, 1)">+</button>
          </div>
        </div>
        <div class="text-end">
          <div class="price-text fw-bold">₹${item.price * item.qty}</div>
          <button class="btn btn-link btn-sm text-danger p-0 mt-1" onclick="removeFromCart(${idx})"><i class="bi bi-trash3"></i></button>
        </div>
      </div>
    `).join('');
    cartFooterEl.style.display = 'block';
    cartTotalEl.textContent = `₹${total}`;
  }
}

function updateCartQty(idx, delta) {
  cart[idx].qty = Math.max(1, cart[idx].qty + delta);
  updateCartUI();
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  updateCartUI();
}

function openCart() {
  updateCartUI();
  new bootstrap.Offcanvas(document.getElementById('cartOffcanvas')).show();
}

// =================== CHECKOUT ===================
function proceedToCheckout() {
  if (cart.length === 0) return;
  bootstrap.Offcanvas.getInstance(document.getElementById('cartOffcanvas')).hide();
  setTimeout(() => {
    goToStep1(true);
    new bootstrap.Modal(document.getElementById('checkoutModal')).show();
  }, 300);
}

function goToStep1(reset) {
  if (reset) {
    document.getElementById('custName').value = '';
    document.getElementById('custPhone').value = '';
    document.getElementById('custEmail').value = '';
    document.getElementById('custAddress').value = '';
  }
  document.getElementById('checkoutStep1').style.display = '';
  document.getElementById('checkoutStep2').style.display = 'none';
  document.getElementById('checkoutStep3').style.display = 'none';
  setStepActive(1);
}

function goToStep2() {
  const name = document.getElementById('custName').value.trim();
  const phone = document.getElementById('custPhone').value.trim();
  const address = document.getElementById('custAddress').value.trim();
  if (!name || !phone || !address) {
    alert('Please fill in Name, Phone and Address.');
    return;
  }
  const payment = document.querySelector('input[name="payment"]:checked').value;
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  document.getElementById('reviewItems').innerHTML = cart.map(i => `
    <div class="d-flex justify-content-between mb-2">
      <span>${i.name} × ${i.qty}${i.note ? ` <em class="text-muted small">(${i.note})</em>` : ''}</span>
      <span class="fw-semibold">₹${i.price * i.qty}</span>
    </div>
  `).join('');
  document.getElementById('reviewTotal').textContent = `₹${total}`;
  document.getElementById('reviewName').textContent = name;
  document.getElementById('reviewPhone').textContent = phone;
  document.getElementById('reviewAddress').textContent = address;
  document.getElementById('reviewPayment').textContent = payment;

  document.getElementById('checkoutStep1').style.display = 'none';
  document.getElementById('checkoutStep2').style.display = '';
  setStepActive(2);
}

function placeOrder() {
  const name = document.getElementById('custName').value.trim();
  const phone = document.getElementById('custPhone').value.trim();
  const address = document.getElementById('custAddress').value.trim();
  const email = document.getElementById('custEmail').value.trim();
  const payment = document.querySelector('input[name="payment"]:checked').value;
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  const orderLines = cart.map(i => `• ${i.name} × ${i.qty} = ₹${i.price * i.qty}${i.note ? ` [Note: ${i.note}]` : ''}`).join('\n');
  const summaryHTML = `
    <p class="mb-1"><strong>Name:</strong> ${name}</p>
    <p class="mb-1"><strong>Phone:</strong> ${phone}</p>
    ${email ? `<p class="mb-1"><strong>Email:</strong> ${email}</p>` : ''}
    <p class="mb-1"><strong>Address:</strong> ${address}</p>
    <p class="mb-1"><strong>Payment:</strong> ${payment}</p>
    <hr class="my-2">
    ${cart.map(i => `<div class="d-flex justify-content-between"><span>${i.name} × ${i.qty}${i.note ? ` <em class="small text-muted">(${i.note})</em>` : ''}</span><span>₹${i.price * i.qty}</span></div>`).join('')}
    <div class="d-flex justify-content-between fw-bold mt-2"><span>Total</span><span>₹${total}</span></div>
  `;
  document.getElementById('confirmSummary').innerHTML = summaryHTML;

  const waMsg = encodeURIComponent(
    `*New Order - Wellmade_22*\n\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\nPayment: ${payment}\n\n*Items:*\n${orderLines}\n\n*Total: ₹${total}*`
  );
  document.getElementById('whatsappOrderBtn').href = `https://wa.me/918815920322?text=${waMsg}`;

  cart = [];
  updateCartUI();

  document.getElementById('checkoutStep2').style.display = 'none';
  document.getElementById('checkoutStep3').style.display = '';
  setStepActive(3);
}

function closeConfirmation() {
  bootstrap.Modal.getInstance(document.getElementById('checkoutModal')).hide();
}

function setStepActive(step) {
  [1, 2, 3].forEach(n => {
    document.getElementById(`step${n}pill`).classList.toggle('active', n === step);
    document.getElementById(`step${n}pill`).classList.toggle('done', n < step);
  });
}

// =================== TOAST ===================
function showToast(msg) {
  document.getElementById('toastMsg').textContent = msg;
  new bootstrap.Toast(document.getElementById('cartToast'), { delay: 2500 }).show();
}

// =================== SCROLL ANIMATION ===================
function initScrollAnim() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
      else e.target.classList.remove('visible');
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.custom, .printables').forEach(el => obs.observe(el));
}

// =================== INIT ===================
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(handmadeBouquet, 'handmadeBouquetGrid');
  renderProducts(personalisedFrames, 'personalisedFramesGrid');
  renderProducts(boxHamper, 'boxHamperGrid');
  renderProducts(gifts, 'giftsGrid');
  renderProducts(printables, 'printablesGrid');
  updateCartUI();
  initScrollAnim();
});
