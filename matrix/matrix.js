export class Matrix {
  constructor(input) {
    this.matrix = input
      .split("\n")
      .map((line) => line.split(" ").map((n) => Number(n)));

    this.columnsCache = undefined;
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    if (this.columnsCache !== undefined) {
      return this.columnsCache;
    } else {
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

      this.columnsCache = result;
      return this.columnsCache;
    }
  }
}
