function createMessage(word) {
  let message = word;

  function addWord(newWord) {
    if (newWord) {
      message += " " + newWord;
      return addWord;
    } else {
      return message;
    }
  }

  return addWord;
}