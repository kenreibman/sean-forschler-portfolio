/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById('header');
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add('scroll-header');
  else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*=============== HAMBURGER MENU ===============*/
const hamburgerMenu = document.querySelector('#hamburgerMenu');
const navMenu = document.querySelector('.nav__menu');

hamburgerMenu.addEventListener('click', () => {
  console.log('clicked');
  navMenu.classList.toggle('show');
});

/*=============== SERVICES MODAL ===============*/

/*=============== MIXITUP FILTER PORTFOLIO ===============*/

/* Link active work */

/*=============== SWIPER LISTINGS ===============*/
let swiperListings = new Swiper('.listings__container', {
  loop: true,
  grabCursor: true,
  slidesPerView: 'auto',
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== LIGHT DARK THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
