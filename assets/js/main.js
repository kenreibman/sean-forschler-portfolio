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

/*=============== SWIPER LISTINGS ===============*/
let swiperListings = new Swiper('.listings__container', {
  loop: true,
  grabCursor: true,
  slidesPerView: 'auto',
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true,
});

sr.reveal(`.home__data`);
sr.reveal(`.hero__container`, { delay: 700 });
`.about__description`;
sr.reveal(`.home__social`, { delay: 900, origin: 'bottom' });

sr.reveal(`.about__container, .about`, { delay: 1000 });
