
const triggers = document.querySelectorAll('.main-nav__item, .hamburger');

Array.from(triggers).forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.hamburger').classList.toggle('active');
    document.querySelector('.main-nav__list').classList.toggle('open');
  });
});

