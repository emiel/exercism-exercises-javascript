export class Matrix {
  constructor(input) {
    this.matrix = this.parseInput(input);
    this.transposed = this.transpose();
  }

  parseInput(input) {
    return input
      .split("\n")
      .map((line) => line.split(" ").map((n) => Number(n)));
  }

  transpose() {
    const result = [];

    let colCount = 0;
    if (this.matrix.length > 0 && this.matrix[0].length > 0) {
      colCount = this.matrix[0].length;
    }

    // Iterate over the matrix in column major order
    for (let i = 0; i < colCount; i++) {
      let col = [];
      for (let j = 0; j < this.matrix.length; j++) {
        col.push(this.matrix[j][i]);
      }
      result.push(col);
    }
    return result;
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    return this.transposed;
  }
}
