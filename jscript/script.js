//burger
const menuBurger = document.querySelector('.menu-burger');
const menuBody = document.querySelector('.menu-body');
menuBurger.addEventListener("click", function (e) {
    menuBody.classList.toggle('active');
});

