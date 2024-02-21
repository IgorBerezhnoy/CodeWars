function multiply(number) {
  if (number === 0) {
    return 0;
  } else {
    let power = Math.abs(number).toString().length;
    return number * Math.pow(5, power);
  }
}