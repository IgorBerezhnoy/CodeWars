function powersOfTwo(n){
    let arr=[1]
    let num=1
    for (let i = 1; num <= n;  i=i+i) {
        arr.push(i+i)
       num++
    }
    return arr
}

console.log(powersOfTwo(0))
console.log(powersOfTwo(1))
console.log(powersOfTwo(4))