const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');


btnHamburger.addEventListener('click', function () {
  console.log('click hamburger');

  // when you click the button, we check if the header has the open class. If it doesnt have it, add it. If it does have it, remove it. 
  if (header.classList.contains('open')) { // Close hamburger menu
    header.classList.remove('open');
    overlay.classList.remove('fade-in');
    overlay.classList.add('fade-out');
  } else { // Open hamburger menu
    header.classList.add('open');
    overlay.classList.add('fade-in');
    overlay.classList.remove('fade-out');
  }
});