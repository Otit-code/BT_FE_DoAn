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

document.addEventListener('DOMContentLoaded', function() {
  const searchElement = document.querySelector('.search');
  const inputSearch = document.getElementById('input-search');

  // Khi click vào search, hiện hoặc ẩn #input-search
  searchElement.addEventListener('click', function(event) {
    // Ngăn không cho sự kiện click lan ra ngoài
    event.stopPropagation();
    // Kiểm tra trạng thái hiển thị và thay đổi
    if (inputSearch.style.display === 'none' || inputSearch.style.display === '') {
      inputSearch.style.display = 'block'; // Hiện
    } else {
      inputSearch.style.display = 'none'; // Ẩn
    }
  });

  // Khi click ra ngoài, ẩn #input-search
  document.addEventListener('click', function(event) {
    // Kiểm tra nếu click ra ngoài search và input-search thì ẩn input-search
    if (!searchElement.contains(event.target) && !inputSearch.contains(event.target)) {
      inputSearch.style.display = 'none'; // Ẩn
    }
  });

  // Ngừng sự kiện click khi click vào input-search để không ẩn nó
  inputSearch.addEventListener('click', function(event) {
    event.stopPropagation();
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

document.addEventListener('DOMContentLoaded', function () {
  // Lấy các phần tử cần thiết
  const addToCartButton = document.querySelector('.light');
  const numberInput = document.getElementById('numberInput');
  const cartMessage = document.createElement('div');
  cartMessage.style.position = 'fixed';
  cartMessage.style.top = '50%';   // Căn giữa theo chiều dọc
  cartMessage.style.left = '50%';  // Căn giữa theo chiều ngang
  cartMessage.style.transform = 'translate(-50%, -50%)'; // Đưa nó về chính giữa
  cartMessage.style.backgroundColor = '#8d8d8d';
  cartMessage.style.color = 'white';
  cartMessage.style.padding = '10px 20px';
  cartMessage.style.borderRadius = '10px';
  cartMessage.style.display = 'none';
  cartMessage.innerText = 'Đã được thêm vào giỏ hàng!';
  document.body.appendChild(cartMessage);

  // Lắng nghe sự kiện click vào nút "Thêm vào giỏ"
  addToCartButton.addEventListener('click', function () {
    // Hiển thị thông báo
    cartMessage.style.display = 'block';
    
    // Lấy giá trị số lượng từ input
    const quantity = numberInput.value;

    // Đảm bảo giá trị là 1 nếu nó không phải là số hợp lệ
    if (parseInt(quantity) <= 0 || isNaN(quantity)) {
      numberInput.value = 1; // Đặt lại giá trị về 1 nếu không hợp lệ
    }

    // Ẩn thông báo sau 3 giây
    setTimeout(function () {
      cartMessage.style.display = 'none';
    }, 1500);
    numberInput.value = 1;
  });
});
