function between(a, b) {
    let arr=[]
    for (let i = a; i < b; i++) {
        arr.push(i)
    }
    arr.push(b)
    return arr
}