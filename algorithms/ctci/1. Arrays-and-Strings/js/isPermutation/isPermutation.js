export const isPermutation = (input, wordToCheckForPerm) => {
  const permMap = new Map();
  const wordToCheckArray = [...wordToCheckForPerm].forEach(word => {
    if (permMap.has(word)) {
      permMap.set(word, permMap.get(word) + 1);
    } else {
      permMap.set(word, 1);
    }
  });

  for (let letter in [...input]) {
    if (!permMap.has(letter)) {
      return false;
    } else {
      if (permMap.get(letter) < 1) return false;
      permMap.set(letter, permMap.get(letter) - 1);
    }
  }
  return true;
};
