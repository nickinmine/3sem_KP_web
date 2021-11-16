console.log('Hell0! Если этот текст отображается в консоли, значит JavaScript подключен');

//burger
const menuBurger = document.querySelector('.menu-burger');
const menuBody = document.querySelector('.menu-body');
const headerLocker = document.querySelector('header');
menuBurger.addEventListener("click", function (e) {
    document.body.classList.toggle('lock');
    headerLocker.classList.toggle('lock');
    menuBody.classList.toggle('active');
});

//content animation
const animItems = document.querySelectorAll('.content-animation');
if (animItems.length > 0) {
    window.addEventListener('scroll', animateContent);
    function animateContent() {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 3;
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset > animItemOffset - animItemPoint) &&
                pageYOffset < (animItemOffset + animItemHeight) &&
                !animItem.classList.contains('visible')) {
                animItem.classList.add('visible');
            }
        }
    }
    function offset(element) {
        const rect = element.getBoundingClientRect();
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop, left: rect.left + scrollLeft
        }
    }
    setTimeout(() => {
        animateContent();
    }, 150);
}
