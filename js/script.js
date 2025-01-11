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

// Lấy các phần tử cần thiết
const footer = document.getElementById('footer');
const content = document.getElementById('login'); // Phần chứa nội dung chính

// Hàm để cập nhật vị trí của footer
function updateFooterPosition() {
  const windowHeight = window.innerHeight;
  const contentHeight = content.offsetHeight;
  const footerHeight = footer.offsetHeight;

  // Tính toán chiều cao còn lại cho footer
  const remainingHeight = windowHeight - contentHeight;

  // Nếu nội dung nhỏ hơn cửa sổ, đẩy footer xuống dưới cùng
  if (remainingHeight > footerHeight) {
    footer.style.position = 'absolute';
    footer.style.bottom = '0';
  } else {
    footer.style.position = 'static';
  }
}

// Gọi hàm khi trang load xong
window.onload = updateFooterPosition;

// Gọi lại hàm khi kích thước cửa sổ thay đổi
window.addEventListener('resize', updateFooterPosition);
