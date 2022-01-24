function findUnique(wordsArr) {
  if (wordsArr.length === 0) return false;

  for (let word of wordsArr) {
    if (wordsArr.indexOf(word) === wordsArr.lastIndexOf(word)) {
      return word;
    }
  }
}
