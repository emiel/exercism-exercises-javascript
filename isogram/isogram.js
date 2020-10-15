export const isIsogram = (phrase) => {
  const seen = new Set();

  for (const letter of phrase.toLowerCase()) {
    if (seen.has(letter)) {
      return false;
    }

    if (letter !== " " && letter !== "-") {
      seen.add(letter);
    }
  }
  return true;
};
