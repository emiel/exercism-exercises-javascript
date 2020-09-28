//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// Gigasecond (31.7 years) in milliseconds
const GIGASEC_MS = 1_000_000_000_000;

export const gigasecond = (moment) => {
  return new Date(moment.getTime() + GIGASEC_MS);
};
