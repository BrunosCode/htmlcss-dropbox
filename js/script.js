const getId = element => document.getElementById(element);
const getClass = element => document.getElementsByClassName(element);

//Changing the type of payment and the price
const annualyInput = getId("annualy");
const mounthlyInput = getId("mounthly");
const prices = getClass("price");

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


// Changing the logo in the .big-square with the selected one
const changingLogo = getId("changing-logo");

const squares = getClass("square");
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', () => {
        changingLogo.src = `img/${squares[i].id}.svg`;
        changingLogo.alt = `${squares[i].id} logo`;
    })
};


const faqsText = getClass("faq-text");
const faqs = getClass("faq-btn");
for (let i = 0; i < faqs.length; i++) {
    faqs[i].addEventListener("click", () => {
        if (! faqsText[i].classList.contains("show")) {
            faqsText[i].classList.add("show")
        } else if (faqsText[i].classList.contains("show")) {
            faqsText[i].classList.remove("show");
        }
    })
};
// faqs[0].addEventListener("click", () => {
//     if (! faqsText[0].classList.contains("show")) {
//         faqsText[0].classList.add("show")
//     } else if (faqsText[0].classList.contains("show")) {
//         faqsText[0].classList.remove("show");
//     }
// })