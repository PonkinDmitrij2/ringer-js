function Ringer({ audio, interval }) {
  this.audio = new Audio(audio);
  this.interval = interval;
}

Ringer.prototype.start = function start() {
  const run = () => {
    this.playPromise = this.audio.play();
  };

  run();

  this.timer = setInterval(run, this.interval);
};

Ringer.prototype.stop = function stop() {
  this.playPromise
    .then(() => {
      this.audio.pause();
      clearInterval(this.timer);
    })
    .catch((error) => console.error(error));
};

export default Ringer;
