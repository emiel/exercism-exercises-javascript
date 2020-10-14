const WORD_RE = /\b[\w']+\b/gm;

export const countWords = (phrase) => {
  const counts = {};

  for (const match of phrase.toLowerCase().matchAll(WORD_RE)) {
    const word = match[0];
    counts[word] = (counts[word] || 0 ) + 1;
  }

  return counts;
};
