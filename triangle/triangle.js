export class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  _isTriangle() {
    if (this.a === 0 && this.b === 0 && this.c === 0) {
      return false;
    } else if (
      this.a + this.b < this.c ||
      this.b + this.c < this.a ||
      this.c + this.a < this.b
    ) {
      return false;
    } else {
      return true;
    }
  }

  isEquilateral() {
    return this._isTriangle() && this.a === this.b && this.b === this.c;
  }

  isIsosceles() {
    return (
      this._isTriangle() &&
      (this.a === this.b || this.b === this.c || this.a === this.c)
    );
  }

  isScalene() {
    return (
      this._isTriangle() &&
      this.a !== this.b &&
      this.b !== this.c &&
      this.c !== this.a
    );
  }
}
