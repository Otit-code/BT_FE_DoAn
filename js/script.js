// custom inputNumber
document.addEventListener('DOMContentLoaded', function() {
    const decrementButton = document.querySelector('.decrement');
    const incrementButton = document.querySelector('.increment');
    const numberInput = document.getElementById('numberInput');

    decrementButton.addEventListener('click', function() {
        let value = parseInt(numberInput.value, 10);
        if (value > numberInput.min) {
            numberInput.value = value - 1;
        }
    });

    incrementButton.addEventListener('click', function() {
        let value = parseInt(numberInput.value, 10);
        if (value < numberInput.max) {
            numberInput.value = value + 1;
        }
    });
});

// show images
const images = document.querySelectorAll('.images img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const closeBtn = document.querySelector('.close');
const galleryImg = document.querySelector('.gallery-inner img'); // Corrected class name
const gallery = document.querySelector('.gallery'); 
let currentImageIndex = 0; // Track the current image index

images.forEach((item, index) => {
  item.addEventListener('click', () => {
    currentImageIndex = index;
    galleryImg.src = item.src; 
    gallery.classList.add('show');
  });
});

closeBtn.addEventListener('click', () => {
  gallery.classList.remove('show');
});

prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length; 
    galleryImg.src = images[currentImageIndex].src;
});
  
nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length; 
    galleryImg.src = images[currentImageIndex].src;
});

gallery.addEventListener('wheel', (event) => {
    event.preventDefault();
});