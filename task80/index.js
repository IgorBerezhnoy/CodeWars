function pipeFix(numbers){
    let result=[]
    for (let i = numbers[0]; i < numbers[numbers.length-1]; i++) {
        result.push(i)
    }
    result.push(numbers[numbers.length-1])
    return result
}