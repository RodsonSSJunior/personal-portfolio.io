// add class navbar-dark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function () {
  var top = window.scrollY;
  if (top >= 100) {
    header.classList.add('navbar-dark');
  }
  else {
    header.classList.remove('navbar-dark');
  }
}

// animationScrollAndPage
const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
})


const elements = document.querySelectorAll('.hidden')
elements.forEach((element => myObserver.observe(element)))