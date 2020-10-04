const LANG = new Map([
  [3, "Pling"],
  [5, "Plang"],
  [7, "Plong"],
]);

export const convert = (n) => {
  const result = [];

  LANG.forEach((word, i) => {
    if (n % i === 0) {
      result.push(word)
    }
  });

  if (result.length > 0) {
    return result.join("");
  } else {
    return n.toString();
  }
};
