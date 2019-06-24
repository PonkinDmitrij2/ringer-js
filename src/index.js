import Ringer from './ringer.js';

const startPlay = document.querySelector('.btn--start');
const stopPlay = document.querySelector('.btn--stop');

let ringer;

const playHandler = () => {
  const options = {
    audio: document.querySelector('.field--path').value,
    interval: Number(document.querySelector('.field--interval').value),
  };

  if (!ringer) {
    ringer = new Ringer(options);
  }

  ringer.start();
};

const stopHandler = () => {
  if (ringer) {
    ringer.stop();
  }
};

startPlay.addEventListener('click', playHandler);
stopPlay.addEventListener('click', stopHandler);
