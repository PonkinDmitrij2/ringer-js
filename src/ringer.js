function Ringer({ audio, interval }) {
  this.audio = new Audio(audio);
  this.interval = interval;
}

Ringer.prototype.start = function start() {
  const run = () => {
    this.playPromise = this.audio.play();
    this.timer = setTimeout(run, this.interval);
  };

  run();
};

Ringer.prototype.stop = function stop() {
  this.playPromise
    .then(() => {
      this.audio.pause();
      clearTimeout(this.timer);
    })
    .catch((error) => console.error(error));
};

export default Ringer;
