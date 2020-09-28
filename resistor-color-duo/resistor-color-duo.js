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

export const colorCode = (color) => COLORS.indexOf(color);

export const decodedValue = ([color1, color2]) => {
  return (colorCode(color1) * 10) + colorCode(color2);
};
