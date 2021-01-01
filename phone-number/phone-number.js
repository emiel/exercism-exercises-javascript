export const clean = (str) => {
  let tmp = str.replaceAll(/[()-.+ ]/g, "");

  if (tmp.length < 10) {
    throw new Error("Incorrect number of digits");
  } else if (tmp.length > 11) {
    throw new Error("More than 11 digits");
  } else if (tmp.length === 11) {
    if (tmp[0] === "1") {
      tmp = tmp.substring(1);
    } else {
      throw new Error("11 digits must start with 1");
    }
  }

  if (tmp.match(/[a-z]/)) {
    throw new Error("Letters not permitted");
  } else if (tmp.match(/[@:!-]/)) {
    throw new Error("Punctuations not permitted");
  } else if (tmp[0] === "0") {
    throw new Error("Area code cannot start with zero");
  } else if (tmp[0] === "1") {
    throw new Error("Area code cannot start with one");
  } else if (tmp[3] === "0") {
    throw new Error("Exchange code cannot start with zero");
  } else if (tmp[3] === "1") {
    throw new Error("Exchange code cannot start with one");
  } else {
    return tmp;
  }
};
