function numberToPower(number, power) {
  let numbers = number;
  if (power == 0) {
    return 1;
  }
  for (let i = 0; i < power - 1; i++) {
    numbers = numbers * number;
  }
  return numbers;
}
