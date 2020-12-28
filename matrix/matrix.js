export class Matrix {
  constructor(buf) {
    this.buf = buf;
  }

  get rows() {
    const result = [];

    for (const line of this.buf.split("\n")) {
      result.push(line.split(" ").map((n) => Number(n)));
    }

    return result;
  }

  get columns() {
    /*
     * 1 2 23
     * 4 35 6
     * 77 8 9
     *
     * =>
     *
     * 1 4 77
     * 2 35 8
     * 23 6 9
     */
    const result = [];

    let colCount = 0;
    if (this.rows.length > 0 && this.rows[0].length > 0) {
      colCount = this.rows[0].length;
    }

    // Iterate over matrix in column major order
    for (let i = 0; i < colCount; i++) {
      let col = [];
      for (let j = 0; j < this.rows.length; j++) {
        col.push(this.rows[j][i]);
      }
      result.push(col);
    }

    return result;
  }
}
