var mySwiper = new Swiper ('.swiper-container', {
    speed: 700,
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});

let menuButton = document.querySelector('.header__burger');
let menu = document.querySelector('.header__body');

menuButton.addEventListener('click', function () {
  menuButton.classList.toggle('header__burger-active');
  menu.classList.toggle('header__body-active');
});