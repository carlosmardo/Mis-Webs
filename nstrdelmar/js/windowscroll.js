window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 280) {
    navbar.classList.add('blur');
  } else {
    navbar.classList.remove('blur');
  }
});
