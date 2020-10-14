const pad = (n, length = 2) => n.toString().padStart(length, "0");

const divmod = (a, n) => {
  return [Math.floor(a / n), a - n * Math.floor(a / n)];
};

export class Clock {
  constructor(hour, minute = 0) {
    [this.hour, this.minute] = this._rollover(hour, minute);
  }

  _rollover(hour, minute = 0) {
    // rollover minutes
    const [mq, mr] = divmod(minute, 60);
    hour += mq;
    minute = mr;

    // rollover hours
    [, hour] = divmod(hour, 24);

    return [hour, minute];
  }

  toString() {
    return `${pad(this.hour)}:${pad(this.minute)}`;
  }

  plus(minutes) {
    [this.hour, this.minute] = this._rollover(this.hour, this.minute + minutes);
    return this;
  }

  minus(minutes) {
    [this.hour, this.minute] = this._rollover(this.hour, this.minute - minutes);
    return this;
  }

  equals(other) {
    return this.hour === other.hour && this.minute === other.minute;
  }
}
