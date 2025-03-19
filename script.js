const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
const products = document.getElementsByClassName("pro-container");
const preBtn = document.getElementsByClassName("pre-btn");
const nxtBtn = document.getElementsByClassName("nxt-btn");
let cartIcons = document.querySelectorAll("#lg-bag");

window.addEventListener("storage", function (event) {
  if (event.key === "cart") {
    updateCartIcon();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".hero1 h4").innerHTML = "";
  document.querySelector(".hero1 h2").innerHTML = "";
  document.querySelector(".hero1 h1").innerHTML = "";
  document.querySelector(".hero1 p").innerHTML = "";
  document.querySelector(".hero1 button").style.display = "none";

  setTimeout(() => {
    var typed1 = new Typed(".hero1 h4", {
      strings: ["Trade-in-offer"],
      typeSpeed: 10,
      showCursor: false,
      loop: false,
      onComplete: function () {
        setTimeout(() => {
          var typed2 = new Typed(".hero1 h2", {
            strings: ["Super value deals"],
            typeSpeed: 10,
            showCursor: false,
            loop: false,
            onComplete: function () {
              setTimeout(() => {
                var typed3 = new Typed(".hero1 h1", {
                  strings: ["On all products"],
                  typeSpeed: 10,
                  showCursor: false,
                  loop: false,
                  onComplete: function () {
                    setTimeout(() => {
                      var typed4 = new Typed(".hero1 p", {
                        strings: ["Save more with coupons & up to 70% off!"],
                        typeSpeed: 10,
                        showCursor: false,
                        loop: false,
                        onComplete: function () {
                          document.querySelector(
                            ".hero1 button"
                          ).style.display = "inline-block";
                        },
                      });
                    }, 400);
                  },
                });
              }, 400);
            },
          });
        }, 400);
      },
    });
  }, 400);
});

document.addEventListener("DOMContentLoaded", function () {
  const hiddenSections = document.querySelectorAll(".hidden");

  function revealOnScroll() {
    hiddenSections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 100 && sectionBottom > 0) {
        section.classList.add("show");
      } else {
        section.classList.remove("show");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});

const featuredProducts = [
  {
    id: 1,
    name: "Versace",
    brand: "versace",
    price: 78,
    image: "img/products/versace.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Valentino",
    brand: "Valentino",
    price: 100,
    image: "img/products/Valentino.jpg",
    rating: 4,
  },
  {
    id: 3,
    name: "Prada",
    brand: "Prada",
    price: 78,
    image: "img/products/prada.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Coco Chanel",
    brand: "coco chanel",
    price: 78,
    image: "img/products/cocochanel.jpg",
    rating: 4,
  },
  {
    id: 5,
    name: "Burberry",
    brand: "Burberry",
    price: 78,
    image: "img/products/burberry.jpg",
    rating: 4,
  },
  {
    id: 6,
    name: "Libre",
    brand: "Libre",
    price: 78,
    image: "img/products/libre.jpg",
    rating: 4,
  },
  {
    id: 7,
    name: "Scandal",
    brand: "Scandal",
    price: 78,
    image: "img/products/scandal.jpg",
    rating: 4,
  },
  {
    id: 8,
    name: "Miss Dior",
    brand: "Dior",
    price: 78,
    image: "img/products/missdior.jpg",
    rating: 4,
  },
];

const newArrivals = [
  {
    id: 1,
    name: "Yara",
    brand: "Latafa",
    price: 78,
    image: "img/products/yara.jpg",
    rating: 4,
  },
  {
    id: 2,
    name: "Khamrah",
    brand: "Latafa",
    price: 100,
    image: "img/products/khamrah.jpg",
    rating: 4,
  },
  {
    id: 3,
    name: "Zara",
    brand: "Zara",
    price: 78,
    image: "img/products/zara.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Boss",
    brand: "Hugg Boss",
    price: 78,
    image: "img/products/cocochanel.jpg",
    rating: 4,
  },
];
const restProducts = [
  {
    id: 1,
    name: "Good Girl",
    brand: "Good Girl",
    price: 78,
    image: "img/products/goodgirl.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Gucci",
    brand: "Gucci",
    price: 78,
    image: "img/products/gucci.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "KAYALI",
    brand: "KAYALI",
    price: 78,
    image: "img/products/kayali.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "My Way",
    brand: "My Way",
    price: 78,
    image: "img/products/myway.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "Dolce",
    brand: "Dolce",
    price: 78,
    image: "img/products/dolce.jpg",
    rating: 5,
  },
  {
    id: 6,
    name: "Lacoste",
    brand: "Lacoste",
    price: 78,
    image: "img/products/lacoste.jpg",
    rating: 5,
  },
];
localStorage.setItem("newArrivals", JSON.stringify(newArrivals));
localStorage.setItem("featuredProducts", JSON.stringify(featuredProducts));

let newarrivals = JSON.parse(localStorage.getItem("newArrivals"));
let featuredproducts = JSON.parse(localStorage.getItem("featuredProducts"));
let allProducts = [...featuredproducts, ...newarrivals, ...restProducts];

if (products.length === 2) {
  let featuredContainer = products[0];
  let newArrivalsContainer = products[1];

  fillProductsContainer(featuredContainer, featuredproducts);
  fillProductsContainer(newArrivalsContainer, newarrivals);
} else if (products.length === 1) {
  handleSwipper();
  handleSearch();
}

function fillProductsContainer(container, products) {
  container.innerHTML = "";
  products.forEach((p, index) => {
    let starsHTML = "";
    for (let i = 0; i < p.rating; i++) {
      starsHTML += `<i class="fas fa-star"></i>`;
    }

    let pHTML = `
      <div class="pro">
        <img src="${p.image}" alt="" />
        <div class="des">
          <span>${p.brand}</span>
          <h5>${p.name}</h5>
          <div class="star">${starsHTML}</div>
          <h4>${p.price}</h4>
        </div>
        <a>
          <i class="fa-solid fa-cart-shopping cart" class="buttonCart" onclick="showQuantityControls(${index}, this)"></i>
        </a>
      </div>`;

    container.innerHTML += pHTML;
  });
}

function handleSwipper() {
  const productsContainer = document.querySelector(".pro-container");
  const productsPerPage = 8;
  let currentPage = 0;
  let totalPages = Math.ceil(allProducts.length / productsPerPage);

  function displayProducts() {
    productsContainer.innerHTML = "";
    let startIndex = currentPage * productsPerPage;
    let endIndex = startIndex + productsPerPage;
    let currentProducts = allProducts.slice(startIndex, endIndex);
    fillProductsContainer(productsContainer, currentProducts);

    preBtn[0].style.display = currentPage === 0 ? "none" : "inline-block";
    nxtBtn[0].style.display =
      currentPage === totalPages - 1 ? "none" : "inline-block";
  }

  nxtBtn[0].addEventListener("click", () => {
    if (currentPage < totalPages - 1) {
      currentPage++;
      window.scrollTo({ top: 0, behavior: "smooth" });
      displayProducts();
    }
  });

  preBtn[0].addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      window.scrollTo({ top: 0, behavior: "smooth" });
      displayProducts();
    }
  });

  displayProducts();
}
function handleSearch() {
  document.getElementById("searchBox").addEventListener("keyup", (e) => {
    let searchValue = e.target.value.toLowerCase();
    let filteredProducts = allProducts.filter((p) =>
      p.name.toLowerCase().includes(searchValue)
    );
    products[0].innerHTML = "";
    fillProductsContainer(products[0], filteredProducts);
  });
}

const category = document.querySelector(".category");
const perfumeCategories = {
  Floral: {
    title: "Floral 🌸",
    description:
      "A classic feminine touch, like strolling through a blooming rose garden.",
    perfumes: ["Miss Dior", "Gucci", "My Way", "Valentino", "Burberry"],
    img: "img/blog/floral.jpg",
  },
  Fruity: {
    title: "Fruity 🍓🍑",
    description:
      "A burst of juicy freshness, leaving a playful and irresistible trail.",
    perfumes: ["KAYALI", "Yara", "Zara", "Dolce"],
    img: "img/blog/fruity.jpg",
  },
  Woody: {
    title: "Woody & Spicy 🌲🔥",
    description:
      "Mysterious and warm, blending bold spices with deep woody notes.",
    perfumes: ["Libre", "Boss", "Khamrah", "Coco Chanel"],
    img: "img/blog/woody.jpg",
  },
  Gourmand: {
    title: "Gourmand 🍦🍪",
    description:
      "Mysterious and warm, blending bold spices with deep woody notes.",
    perfumes: ["Scandal", "Good Girl", "Yara", "Khamrah"],
    img: "img/blog/gourmand.jpg",
  },
  Fresh: {
    title: "Fresh & Clean 🌿💦",
    description:
      "Pure and refreshing, like stepping out of a cool shower on a summer day",
    perfumes: ["Lacoste", "Prada", "Versace"],
    img: "img/blog/fresh.jpg",
  },
};
Object.entries(perfumeCategories).forEach(([key, category]) => {
  const categoryDiv = document.createElement("div");
  categoryDiv.classList.add("category");
  categoryDiv.innerHTML = `
        <h3>${category.title}</h3>
        <p>${category.description}</p>
      `;
  categoryDiv.style.backgroundImage = `url(${category.img})`;
  document.querySelector(".categories").appendChild(categoryDiv);

  categoryDiv.addEventListener("click", () => {
    toggleMenu(categoryDiv, category);
  });
});

function toggleMenu(selectedCategory, category) {
  let menu = selectedCategory.nextElementSibling;

  if (!menu || !menu.classList.contains("dropdown")) {
    menu = document.createElement("div");
    menu.classList.add("dropdown");
    selectedCategory.after(menu);
  }

  const filteredProducts = allProducts.filter((product) =>
    category.perfumes.includes(product.name)
  );

  menu.innerHTML = `
    <h3>${category.title}</h3>
    <p>${category.description}</p>
    <div class="pro-container"></div>
  `;

  let proContainer = menu.querySelector(".pro-container");

  fillProductsContainer(proContainer, filteredProducts);

  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", JSON.stringify([]));
}

function handleCart() {
  updateCartIcon();
  let cartContainer = document.querySelector(".cart-container");
  cartContainer.innerHTML = "";
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart.forEach((p, index) => {
    let div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
            <img src="${p.img}" alt="" />
            <div class="cart-item-name">${p.name}</div>
            <div class="cart-item-price">${p.price}</div>
            <div class="cart-item-quantity">
              <div class="quantity-control">
                <button class="minus">-</button>
                <div class="quantity">${p.quantity}</div>
                <button class="plus">+</button>
              </div>
            </div>
            <div class="cart-item-remove">
              <button class="remove-item" data-index="${index}">Remove</button>
            </div>
          `;
    cartContainer.appendChild(div);
  });
}
function addToCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  let product = allProducts[index];
  let existingProduct = cart.find((p) => p.name === product.name);
  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  handleCart();
}
function showQuantityControls(index, button) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let product = allProducts[index];
  let existingProduct = cart.find((p) => p.name === product.name);
  let quantity = existingProduct ? existingProduct.quantity : 0;

  button.innerHTML = `<div class="quantity-control">
                        <button class="decrease" onclick="updateQuantity(${index}, -1, this)">-</button>
                        <span class="quantity">${quantity}</span>
                        <button class="increase" onclick="updateQuantity(${index}, 1, this)">+</button>
                      </div>`;
}

function updateQuantity(index, change, button) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let product = allProducts[index];
  let existingProduct = cart.find((p) => p.name === product.name);

  if (existingProduct) {
    existingProduct.quantity += change;

    if (existingProduct.quantity < 1) {
      cart = cart.filter((p) => p.name !== product.name);
      resetCartButton(index, button);
    }
  } else if (change > 0) {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  handleCart();

  if (existingProduct && existingProduct.quantity > 0) {
    button.parentNode.querySelector(".quantity").innerText =
      existingProduct.quantity;
  }
}
function updateCartIcon() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  let cartIconContainer = document.querySelector("#lg-bag");
  if (!cartIconContainer) return;

  let countSpan = cartIconContainer.querySelector(".cart-count");
  if (countSpan) {
    countSpan.innerText = totalQuantity;
  } else {
    cartIconContainer.innerHTML = `
      <a class="active" href="cart.html">
        <i class="fa-solid fa-cart-shopping"></i>
        ${
          totalQuantity > 0
            ? `<span class="cart-count">${totalQuantity}</span>`
            : ""
        }
      </a>
    `;
  }
}

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
