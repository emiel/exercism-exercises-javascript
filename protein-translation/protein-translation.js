//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const CODON_LENGTH = 3;

export const translate = (sequence) => {
  if (sequence === undefined) {
    return [];
  }

  let result = [];

  for (let i = 0; i < sequence.length; i += CODON_LENGTH) {
    const codon = sequence.substring(i, i + CODON_LENGTH);

    if (codon === "UAA" || codon === "UAG" || codon === "UGA") {
      break;
    } else if (codon == "AUG") {
      result.push("Methionine");
    } else if (codon === "UUU" || codon === "UUC") {
      result.push("Phenylalanine");
    } else if (codon === "UUA" || codon === "UUG") {
      result.push("Leucine");
    } else if (
      codon === "UCU" ||
      codon === "UCC" ||
      codon === "UCA" ||
      codon === "UCG"
    ) {
      result.push("Serine");
    } else if (codon === "UAU" || codon === "UAC") {
      result.push("Tyrosine");
    } else if (codon === "UGU" || codon === "UGC") {
      result.push("Cysteine");
    } else if (codon === "UGG") {
      result.push("Tryptophan");
    } else {
      throw Error("Invalid codon");
    }
  }

  return result;
};
