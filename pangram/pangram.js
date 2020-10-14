export const isPangram = (sentence) => {
  // The lower 26 bits of `seen` indicate if the corresponding letter is
  // present in the sentence.
  let seen = 0;

  for (let i = 0; i < sentence.length; i++) {
    const code = sentence.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      // Uppercase letters
      seen |= 1 << (code - 65);
    } else if (code >= 97 && code <= 122) {
      // Lowercase letters
      seen |= 1 << (code - 97);
    }
  }

  return seen === 0x3ffffff;
};
