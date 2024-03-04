function sumArray(array) {
  if (Array.isArray(array) === false || array.length <= 2) {
    return 0;
  }
  let min = array[0];
  let max = array[1];
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
    sum += array[i];
  }
  return (sum - min) - max;
}

console.log(sumArray([6, 2, 1, 8, 10]));