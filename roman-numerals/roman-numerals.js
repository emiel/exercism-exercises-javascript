const NUMERALS = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

export const toRoman = (num) => {
  let result = "";

  NUMERALS.forEach(([n, l]) => {
    const q = Math.trunc(num / n);
    result += l.repeat(q);
    num %= n;
  });

  return result;
};
