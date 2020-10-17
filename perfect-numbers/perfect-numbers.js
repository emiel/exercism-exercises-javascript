export const classify = (num) => {
  if (num <= 0) {
    throw new Error("Classification is only possible for natural numbers.");
  } else if (num === 1) {
    return "deficient";
  }

  const divisors = [];

  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }

  const aliquotSum = divisors.reduce((acc, n) => acc + n);

  if (aliquotSum > num) {
    return "abundant";
  } else if (aliquotSum < num) {
    return "deficient";
  } else {
    return "perfect";
  }
};
