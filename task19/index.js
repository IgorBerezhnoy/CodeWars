function simpleMultiplication(number) {
  let remains = number % 2;
  if (remains == 0) {
    return number * 8;
  } else {
    return number * 9;
  }
}
