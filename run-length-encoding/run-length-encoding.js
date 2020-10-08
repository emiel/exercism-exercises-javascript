export const encode = (buf) => {
  if (buf === "") {
    return buf;
  }

  let count = 1;
  let prev = buf[0];
  let result = "";

  for (let i = 1; i < buf.length; i++) {
    if (buf[i] !== prev) {
      result += `${count > 1 ? count : ""}${prev}`;
      count = 1;
      prev = buf[i];
    } else {
      count++;
    }
  }

  result += `${count > 1 ? count : ""}${prev}`;

  return result;
};

export const decode = (buf) => {
  let result = "";
  let digitBuf = "";

  const isDigit = (c) => c >= 49 && c <= 57;

  for (let i = 0; i < buf.length; i++) {
    if (isDigit(buf.charCodeAt(i))) {
      digitBuf += buf[i];
    } else {
      if (digitBuf !== "") {
        for (let j = 0; j < Number(digitBuf); j++) {
          result += buf[i];
        }
        digitBuf = "";
      } else {
        result += buf[i];
      }
    }
  }

  return result;
};
