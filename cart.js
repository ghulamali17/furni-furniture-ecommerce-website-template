function cart(event) {
  const addToCartBtn = event.target.closest(".icon-cross");
  const productContainer = addToCartBtn.closest(".product-container");
  const productImg = productContainer.querySelector(".product-img").src;
  const productTitle =
    productContainer.querySelector(".product-title").innerText;
  const productPrice = parseFloat(
    productContainer.querySelector(".product-price").innerText.replace("$", "")
  );

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
          <td>${product.price}$</td>
          <td>
            <input type="number" class="form-control text-center quantity-amount" value="1" min="1" aria-label="Quantity for ${product.title}" />
          </td>
          <td>${product.price}$</td>
          <td><a href="#" class="btn btn-black btn-sm" onclick="removeFromCart(${index})"><i class="fa-solid fa-trash trash-icon"></i></a></td>
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

// Calculating SubTotal
function subTotalCal() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return total;
}
document.addEventListener("DOMContentLoaded", () => {
  const totalAmount = subTotalCal();
  let subTotalElement = document.getElementById("Subtotal");
  let TotalElement = document.getElementById("total");
  if (subTotalElement && TotalElement) {
    subTotalElement.innerHTML = `$${totalAmount.toFixed(2)}`;
    TotalElement.innerHTML = `$${totalAmount.toFixed(2)}`;
  }
});
