function consecutive(arr, a, b) {
  let res = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === a) {
      if (arr[i + 1] === b) {
        res = true;
      }
    }
    if (arr[i] === b) {
      if (arr[i + 1] === a) {
        res = true;
      }
    }
  }
  return res;
}