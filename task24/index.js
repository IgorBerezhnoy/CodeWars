function squareSum(numbers) {
  let sumOfSquare = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumOfSquare += numbers[i] * numbers[i];
  }
  return sumOfSquare;
}
