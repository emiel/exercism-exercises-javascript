const toLetter = (word) => {
  const cleaned = word.replace(/^_+/, "");

  if (cleaned.length) {
    return cleaned.charAt(0).toUpperCase();
  } else {
    return "";
  }
};

export const parse = (phrase) => {
  const words = phrase.split(/\s+|-/);
  return words.map(toLetter).join("");
};
