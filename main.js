// Responsive Navbar
function toggleMenu() {
  const menuList = document.getElementById("nav_links");
  if (menuList.style.maxHeight === "0px" || menuList.style.maxHeight === "") {
    menuList.style.maxHeight = "600px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}

// Remove Navbar Active Class on smaller screens
const removeActiveClassOnResize = () => {
  const navLinks = document.querySelectorAll(".nav_links a");
  const currentPath = window.location.pathname;

  navLinks.forEach((link) => {
    if (window.innerWidth < 768) {
      link.classList.remove("active");
    } else {
      if (link.href.includes(currentPath)) {
        link.classList.add("active");
      }
    }
  });
};

window.addEventListener("resize", removeActiveClassOnResize);
removeActiveClassOnResize();

// Tiny Slider
if (document.querySelector(".slider-wrapper")) {
  const tnsslider = tns({
    container: ".slider-wrapper",
    items: 1,
    slideBy: 1,
    speed: 700,
    nav: true,
    navPosition: "bottom",
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayButtonOutput: false,
    controls: true,
    controlsContainer: "#controls",
    prevButton: ".prev",
    nextButton: ".next",
  });
}

function cart(event) {
  const addToCartBtn = event.target.closest(".icon-cross");
  const productContainer = addToCartBtn.closest(".product-container");
  const productImg = productContainer.querySelector(".product-img").src;
  const productTitle =
    productContainer.querySelector(".product-title").innerText;
  const productPrice =
    productContainer.querySelector(".product-price").innerText;

  const product = {
    image: productImg,
    title: productTitle,
    price: productPrice,
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  console.log("Product added to cart:", product);
  alert(`${productTitle} has been added to your cart.`);
}

document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Updating product track information
  const producttrack = document.querySelector(".producttrack");
  if (producttrack) {
    producttrack.innerText =
      cart.length === 0
        ? "Cart is empty"
        : `${cart.length} ${cart.length === 1 ? "Item" : "Items"} in cart`;
  }

  const table = document.querySelector("table");
  if (!table) {
    console.log("No table found on this page.");
    return;
  }

  const tbody = table.querySelector("tbody");
  if (!tbody) {
    console.error("Tbody not found!");
    return;
  }

  if (cart.length === 0) {
    console.log("Cart is empty.");
  } else {
    cart.forEach((product, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td><img src="${product.image}" alt="${product.title}" style="width: 80px; height: auto;" /></td>
        <td>${product.title}</td>
        <td>${product.price}</td>
        <td>
          <input type="number" class="form-control text-center quantity-amount" value="1" min="1" aria-label="Quantity for ${product.title}" />
        </td>
        <td>${product.price}</td>
        <td><a href="#" class="btn btn-black btn-sm" onclick="removeFromCart(${index})">X</a></td>
      `;
      tbody.appendChild(row);
    });
  }
});

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}
