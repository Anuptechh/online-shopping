
let searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    searchform.classList.toggle('active');
    shoppingcart.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
    feature.classList.remove('active');
};

let shoppingcart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>
{
    shoppingcart.classList.toggle('active');
    searchform.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
};

let loginform = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
    loginform.classList.toggle('active');
    searchform.classList.remove('active');
    shoppingcart.classList.remove('active');
    navbar.classList.remove('active');
};

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
    shoppingcart.classList.remove('active');
    loginform.classList.remove('active');
    
}


window.onscroll = () =>
    {
        searchform.classList.remove('active');
        shoppingcart.classList.remove('active');
        loginform.classList.remove('active');
        navbar.classList.remove('active');
    };






    
    const sliderWrapper = document.querySelector(".products-slider .wrapper");
const boxes = document.querySelectorAll(".products-slider .box");

// Clone the first few items to make the loop effect
boxes.forEach((box) => {
    const clone = box.cloneNode(true);
    sliderWrapper.appendChild(clone);
});

// Scroll the slider automatically
let scrollAmount = 0;
const boxWidth = boxes[0].offsetWidth + 16; // Box width including the gap
const scrollInterval = setInterval(() => {
    scrollAmount += boxWidth;
    sliderWrapper.style.transform = `translateX(-${scrollAmount}px)`;

    if (scrollAmount >= sliderWrapper.scrollWidth / .1) {
        // Reset to the beginning when the loop completes
        scrollAmount = 0;
        sliderWrapper.style.transform = `translateX(0px)`;
    }
},10000); // Change every 3 seconds
