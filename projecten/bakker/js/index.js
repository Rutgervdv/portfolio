
const triggers = document.querySelectorAll('.main-nav__item, .hamburger');

Array.from(triggers).forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.hamburger').classList.toggle('active');
    document.querySelector('.main-nav__list').classList.toggle('open');
  });
});

// window.onload = function(){
// 	document.getElementById("home_page").style.height = window.innerHeight + "px";
// 	document.getElementById("Homepage_LinkerVlak").style.height = window.innerHeight + "px";
// 	document.getElementById("Homepage_RechterVlak").style.height = window.innerHeight + "px";

// 	console.log(window.innerHeight);
// }
