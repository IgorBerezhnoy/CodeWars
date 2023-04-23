function nearestSq(n) {
  debugger;
  let number = Math.sqrt(n) - Math.floor(Math.sqrt(n));
  if (number == 0) {
    number += 1;
  }
  if (number > 0.50001) {
    return Math.round(Math.sqrt(n)) * Math.round(Math.sqrt(n));
  } else {
    return Math.floor(Math.sqrt(n)) * Math.floor(Math.sqrt(n));
  }
}
