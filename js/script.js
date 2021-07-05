const getId = element => document.getElementById(element);
const getClass = element => document.getElementsByClassName(element);

//Changing the type of payment
const annualyInput = getId("annualy");
const mounthlyInput = getId("mounthly");
const prices = getClass("price")

mounthlyInput.addEventListener('change', () => {
    for (let i = 0; i < prices.length; i++) {
        prices[i].innerText = "19.99€";
    }
})

annualyInput.addEventListener('change', () => {
    for (let i = 0; i < prices.length; i++) {
        prices[i].innerText = "99.99€";
    }
})


