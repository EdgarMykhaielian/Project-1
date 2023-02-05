//Show Youtube + hide screensaver
const youtube = document.querySelector('.video__youtube')
const screensaver = document.querySelector('.video__screensaver')
const videoBtn = document.querySelector('.video__btn')
videoBtn.addEventListener('click', showYoutube)

function showYoutube() {
    youtube.style.display = 'block'
    screensaver.style.display = 'none'
}

//BURGER MENU

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const hero = document.querySelector(".hero__content")
const body = document.body

hamburger.addEventListener("click", burgerMenu);

function burgerMenu() {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
    hero.classList.toggle("hidden")
    body.classList.toggle("hidden")
}

// hamburger menu - close when we click a link.

const menuItem = document.querySelectorAll(".menu__item");
menuItem.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
    hero.classList.toggle("hidden")
    body.classList.toggle("hidden")
}
