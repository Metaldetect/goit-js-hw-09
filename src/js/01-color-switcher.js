function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};
let timerId = null;

refs.startBtn.addEventListener('click', () => {
  timerId = setInterval(changeBackgroundColor, 1000);
  refs.startBtn.disabled = true;
});

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

refs.stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  refs.startBtn.disabled = false;
});
