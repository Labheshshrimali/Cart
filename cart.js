document.addEventListener("DOMContentLoaded", function() {
    let cart = [];

    document.getElementById("cart-icon").addEventListener("click", function () {
        document.getElementById("cart-popup").classList.remove("hidden");
    });

    document.getElementById("close").addEventListener("click", function () {
        document.getElementById("cart-popup").classList.add("hidden");
    });

    let buttons = document.getElementsByClassName("add");

    for(let i=0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function() {
                let productName = this.getAttribute("data-name");
                
                if (cart.indexOf(productName) === -1) {
                    cart.push(productName);
                    this.innerHTML = "Item Added to Cart";

                document.getElementById("cart-items").innerHTML = "";
                for (let j = 0; j < cart.length; j++) {
                    document.getElementById("cart-items").innerHTML += "<li>" + cart[j] + "</li>";
                }
                
                document.getElementById("cart-count").innerHTML = cart.length;
                }
            })
    }

    
})