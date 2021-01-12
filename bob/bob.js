const isQuestion = (msg) => {
  return /\?$/.test(msg.trim());
};

const isYell = (msg) => {
  return /[a-zA-Z]/.test(msg) && msg.toUpperCase() === msg;
};

const isSilence = (msg) => {
  return msg.trim() === "";
};

export const hey = (message) => {
  if (isYell(message) && isQuestion(message)) {
    return "Calm down, I know what I'm doing!";
  } else if (isQuestion(message)) {
    return "Sure.";
  } else if (isYell(message)) {
    return "Whoa, chill out!";
  } else if (isSilence(message)) {
    return "Fine. Be that way!";
  } else {
    return "Whatever.";
  }
};
