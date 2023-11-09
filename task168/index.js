function checkRoot(string) {
  let count = 0;
  let arr = string.split(',').map(el => +el);
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i]) && (!isNaN(arr[i + 1])|| i + 1 >= arr.length)&&arr.length===4) {
      if (arr[i] + 1 === arr[i + 1] || i + 1 >= arr.length) {
        if (count === 0) {
          count = arr[i];
        } else {
          count *= arr[i];
        }
      } else {
        return 'not consecutive';
      }
    } else {
      return 'incorrect input';
    }
  }
  return `${count + 1}, ${Math.sqrt(count + 1)}`;
}

console.log(checkRoot('3,s,5,6'));
console.log(checkRoot('11,13,14,15'));
console.log(checkRoot('4,5,6,7'));

