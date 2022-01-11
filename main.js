const switchDarkBtn = document.querySelector('.input-switch__selected');

const switchDarkBtnImg = switchDarkBtn.querySelector('img');

const switchContainer = document.querySelector('.input-switch__container');

const footerValue = document.querySelector('.footer__option-value');

switchDarkBtn.addEventListener('click', function (e) {
  if (!switchDarkBtn.classList.contains('input-switch__selected--active')) {
    switchDarkBtn.classList.add('input-switch__selected--active');
    switchDarkBtnImg.src = 'Assets1/moon-violet.svg';
    switchContainer.style.backgroundColor = 'rgb(102, 97, 113)';
  } else {
    switchDarkBtn.classList.remove('input-switch__selected--active');
    switchDarkBtnImg.src = 'Assets1/sun.svg';
    switchContainer.style.backgroundColor = 'rgb(189,194,196)';
  }
});

function fluidValue() {
  let value = footerValue.textContent;
  valueNum = Number(value.substring(1));
  footerValue.textContent = `$${valueNum + 15}`;
}

setInterval(fluidValue, 10000);
