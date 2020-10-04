export const transform = (old) => {
  const result = {};
  for (const [score, letters] of Object.entries(old)) {
    letters.forEach((letter) => (result[letter.toLowerCase()] = Number(score)));
  }
  return result;
};
