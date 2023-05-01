const header = document.querySelector('#content-hero-top');
const navHeight = header.offsetHeight;

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll');
  } else {
    // menor que a altura do header
    header.classList.remove('scroll');
  }
}

const scrollReveal = ScrollReveal();

// {
//   origin: 'top',
//   duration: 700,
//   reset: true,
// }

scrollReveal.reveal(
  `#content-hero-top .section-hero,
  #content-description .item,

  #content-contact .contact,`,
  { interval: 100 }
);
