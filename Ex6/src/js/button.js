const minusButton = document.querySelector('.minus');
const displaySpan = document.querySelector('.display');
const plusButton = document.querySelector('.plus');

let currentValue = parseInt(displaySpan.textContent);

minusButton.addEventListener('click', () => {
  if (currentValue > 0) {
    currentValue--;
    displaySpan.textContent = currentValue;
  }
});

plusButton.addEventListener('click', () => {
  currentValue++;
  displaySpan.textContent = currentValue;
});