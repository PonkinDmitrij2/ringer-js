function Ringer({ audio, interval }) {
  this.audio = new Audio(audio);
  this.interval = interval;
}

Ringer.prototype.start = function start(error) {
  const run = () => {
    this.playPromise = this.audio.play();
  };

  run();

  this.playPromise.catch((e) => {
    error();
    console.error(e);
  });

  this.audio.addEventListener('ended', () => {
    setTimeout(run, this.interval);
  });
};

Ringer.prototype.stop = function stop() {
  this.playPromise
    .then(() => this.audio.pause())
    .catch((e) => console.error(e));
};

export default Ringer;
