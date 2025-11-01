document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("add-cart");
  const cartContainer = document.getElementById("cart-items");
  const clearBtn = document.getElementById("clear-cart");

  // Add to cart
  if (addBtn) {
    addBtn.addEventListener("click", () => {
      const id = addBtn.dataset.id;
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(id);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Added to cart!");
    });
  }

  // Show cart
  if (cartContainer) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
      cartContainer.innerHTML = cart.map(id => `<p>Product ID: ${id}</p>`).join("");
    }
  }

  // Clear cart
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      localStorage.removeItem("cart");
      location.reload();
    });
  }
});
