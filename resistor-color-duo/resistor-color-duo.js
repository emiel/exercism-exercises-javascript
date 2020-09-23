//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's
// been provided as a convenience to get you started writing code faster.
//
export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

export const decodedValue = (colors) => {
  if (colors.length < 2) {
    throw "A little more color please...";
  }

  const buf = [colors[0], colors[1]]
    .map((col) => COLORS.indexOf(col).toString(10))
    .join("");

  return parseInt(buf, 10);
};
