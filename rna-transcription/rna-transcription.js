const DNA_RNA_MAP = new Map([
  ["G", "C"],
  ["C", "G"],
  ["T", "A"],
  ["A", "U"],
]);

export const toRna = (seq) => [...seq].map((n) => DNA_RNA_MAP.get(n)).join("");
