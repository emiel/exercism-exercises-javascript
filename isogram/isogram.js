export const isIsogram = (phrase) => {
  const seen = new Set();

  for (const letter of phrase.toLowerCase()) {
    if (letter === " " || letter === "-") {
      continue;
    } else if (seen.has(letter)) {
      return false;
    } else {
      seen.add(letter);
    }
  }
  return true;
};
