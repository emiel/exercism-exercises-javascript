export const isPangram = (sentence) => {
  // Allocate a array which contains one item per letter in the alphabet. When
  // the letter is seen in the sentence the relevant position is set to one.
  //
  // [0,0,0  ...0]
  //  0,1,2  ...25
  //  a,b,c  ...z
  const letterFlags = new Uint8Array(26);

  for (let i = 0; i < sentence.length; i++) {
    const code = sentence.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      // Uppercase letters
      letterFlags[code - 65] = 1;
    } else if (code >= 97 && code <= 122) {
      // Lowercase letters
      letterFlags[code - 97] = 1;
    }
  }

  // If every position (letter) has been set we have a pangram.
  return letterFlags.every(Boolean);
};
