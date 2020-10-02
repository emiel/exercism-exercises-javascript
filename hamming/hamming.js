export const compute = (xs, ys) => {
  if (xs.length !== ys.length) {
    if (xs.length === 0) {
      throw Error("left strand must not be empty");
    }

    if (ys.length === 0) {
      throw Error("right strand must not be empty");
    }

    if (xs.length !== ys.length) {
      throw Error("left and right strands must be of equal length");
    }
  }

  let distance = 0;
  for (let i = 0; i < xs.length; i++) {
    if (xs.charAt(i) !== ys.charAt(i)) {
      distance++;
    }
  }
  return distance;
};
