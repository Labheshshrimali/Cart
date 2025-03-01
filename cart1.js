document.addEventListener("DOMContentLoaded", function () {
    let cart = [];
    
    document.getElementById("cart-icon").addEventListener("click", function () {
        document.getElementById("cart-popup").classList.remove("hidden");
    });

    document.getElementById("close").addEventListener("click", function () {
        document.getElementById("cart-popup").classList.add("hidden");
    });

    let buttons = document.getElementsByClassName("add");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            let productName = this.getAttribute("data-name");

            if (cart.indexOf(productName) === -1) {
                cart.push(productName);
                this.innerHTML = "Item Added to Cart";
                updateCart();
            }
        });
    }

    function updateCart() {
        let cartItems = document.getElementById("cart-items");
        let cartCount = document.getElementById("cart-count");

        cartItems.innerHTML = "";
        for (let i = 0; i < cart.length; i++) {
            cartItems.innerHTML += "<li>" + cart[i] + "</li>";
        }

        cartCount.innerHTML = cart.length;
    }
});
