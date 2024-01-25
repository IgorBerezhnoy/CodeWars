const getMiddle = (s) => {
  if (typeof s !== 'string') {
    throw new Error('incorrect value');
  }
  if (s.length % 2 === 0) {
    return s.slice((s.length / 2 - 1), (s.length / 2 + 1));
  } else {
    return s.slice((s.length / 2), (s.length / 2 + 1));
  }
};

console.log((getMiddle('test')));
console.log((getMiddle('testing')));
console.log((getMiddle('A')));