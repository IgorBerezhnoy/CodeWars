function removeEveryOther(arr) {
  let fixArr = [];
  for (let i = 0; i < arr.length; i += 2) {
    fixArr.push(arr[i]);
  }
  return fixArr;
}
