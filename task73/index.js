function sumMul(n,m){
if (m<=0||n<=0){
  return "INVALID"
}

  let sum=0
  for (let i =1 ; i*n <m ; ++i) {
    sum+=n*i
  }
  return sum
}