function uniTotal (string) {
    let sum=0
    for (let i = 0; i < string.length; i++) {
        sum+=string[i].charCodeAt(0);
    }
    return sum
}

console.log(uniTotal("Mary Had A Little Lamb"));