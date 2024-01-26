//Sum of Digits / Digital Root


function digitalRoot(n) {
  let nStr = n.toString();
  let sum = 0;
  for (let i = 0; i < nStr.length; i++) {
    sum += Number(nStr[i]);
  }
  if (sum > 9) {
   return  digitalRoot(sum);
  } else {
    return sum;
  }
}

console.log(digitalRoot(456));
console.log(digitalRoot(16));