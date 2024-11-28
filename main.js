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
  const spanElement = event.target.closest(".icon-cross");
  const productContainer = spanElement.closest(".product-container");

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
  console.log(document.body); 
  const tbody = document.querySelector(".tbody");
  console.log(tbody);  
  if (tbody) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.forEach((product, index) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>
          <img src="${product.image}" alt="${product.title}" style="width: 80px; height: auto;" />
        </td>
        <td>${product.title}</td>
        <td>${product.price}</td>
        <td>
          <input
            type="number"
            class="form-control text-center quantity-amount"
            value="1"
            min="1"
            aria-label="Quantity for ${product.title}"
          />
        </td>
        <td>${product.price}</td>
        <td><a href="#" class="btn btn-black btn-sm" onclick="removeFromCart(${index})">X</a></td>
      `;
      tbody.appendChild(row);
    });
  } else {
    console.error('tbody element not found!');
  }
});


function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}
