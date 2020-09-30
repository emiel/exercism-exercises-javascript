//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseStringCheat = (str) => {
  return [...str].reverse().join("");
};

export const reverseString = (str) => {
  let result = "";
  for (let idx = str.length - 1; idx >= 0; idx--) {
    result += str[idx];
  }
  return result;
};
