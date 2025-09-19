const log = document.querySelector("#logit");
const account=document.querySelector("#account");
const loggedInUser = localStorage.getItem("loggedInUser");

if (loggedInUser) {
    log.innerText = "Logout";
    account.innerText=loggedInUser;
    log.addEventListener("click", () => {
        localStorage.removeItem("loggedInUser");
        window.location.href = "login.html";
    });
}
else {
    log.innerText = "Login"; 
    cartCount.innerText = 0;
    cartTotal.innerText = 0;
    return;
}

const cartCount = document.querySelector("#cart-count");
const cartTotal = document.querySelector("#cart-total");
const obj = JSON.parse(localStorage.getItem(user.value));

let cart = obj.cart;

UpdateUI();

const addButton = document.querySelectorAll(".add");

addButton.forEach(button => {
    button.addEventListener("click", () => {
        const price = Number(button.getAttribute("data-price"));
        cart.items += 1;
        cart.total += price;
        localStorage.setItem("cart", JSON.stringify(cart));
        UpdateUI();
    })
}
);
function UpdateUI() {
    cartCount.innerText = cart.items;
    cartTotal.innerText = cart.total;
}