const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

// // Get the modal
// var modal = document.querySelector('.modal');

// // Get the image and insert it inside the modal
// var images = document.querySelectorAll('.tile img');
// var modalImg = document.querySelector('.modal-content');
// for (var i = 0; i < images.length; i++) {
//   images[i].addEventListener('click', function() {
//     modal.style.display = 'block';
//     modalImg.src = this.src;
//   });
// }

// // Get the <span> element that closes the modal
// var closeBtn = document.querySelector('.close');

// // When the user clicks on <span> (x), close the modal
// closeBtn.addEventListener('click', function() {
//   modal.style.display = 'none';
// });

