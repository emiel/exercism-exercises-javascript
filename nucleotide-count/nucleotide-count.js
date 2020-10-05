export class NucleotideCounts {
  static parse(strand) {
    let counts = [0, 0, 0, 0];

    for (let i = 0; i < strand.length; i++) {
      switch (strand[i]) {
        case "A":
          counts[0]++;
          break;
        case "C":
          counts[1]++;
          break;
        case "G":
          counts[2]++;
          break;
        case "T":
          counts[3]++;
          break;
        default:
          throw new Error("Invalid nucleotide in strand");
      }
    }

    return counts.join(" ");
  }
}
