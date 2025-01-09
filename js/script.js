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
