const nameSpan = document.querySelector('.about p span.name');

nameSpan.addEventListener('mouseover', () => {
  nameSpan.textContent = '------Nags-----';
});

nameSpan.addEventListener('mouseout', () => {
  nameSpan.textContent = 'Anish Nagula';
});

const musicTopImg = document.querySelector('.vinyl');
const audio = document.querySelector('audio');

musicTopImg.addEventListener('click', () => {
  if (audio.paused) {
    audio.currentTime = 0; // reset to 0
    audio.play();
  } else {
    audio.pause();
  }
});