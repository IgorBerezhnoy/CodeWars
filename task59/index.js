function findMultiples(integer, limit) {
    let sum=[]
    let number=integer

    for (let i =1; number<limit+1;i++){
        sum.push(number)
        number+=integer
    }
    return sum
}
