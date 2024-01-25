function array(string) {
  if (typeof string !== 'string') throw new Error('incorrect value');
  const arr = string.split(',');
  if (arr.length < 3) {
    return null;
  } else {
    return (arr.slice(1, arr.length - 1)).join(" ");
  }
}

console.log(array(''));
console.log(array('1'));
console.log(array('A1,B2'));
console.log(array('A1,B2,C3,D4,E'));