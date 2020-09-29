const transcribe = (n) => {
  switch (n) {
    case "G":
      return "C";
    case "C":
      return "G";
    case "T":
      return "A";
    case "A":
      return "U";
    default:
      throw Error("Unknown nucleotide");
  }
};

export const toRna = (sequence) => {
  return [...sequence].map(transcribe).join("");
};
