function decode(code, n) {
  let currentWordArray = [];
  let nString= n.toString();
  let currentWord = '';
  let count = 0;
  for (let i = 0; i < code.length; i++) {
    debugger
    currentWordArray.push(code[i] - nString[count]);
    count++;
    if (count >= nString.length) count = 0;
  }
  return currentWordArray.map(el=>String.fromCharCode(el+64)).join('').toLowerCase();
}

console.log(decode([20, 12, 18, 30, 21], 1939));
