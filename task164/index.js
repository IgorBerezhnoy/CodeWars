function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) return null;
    let num = 0,
        negativeNum = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            num++;
        } else {
            negativeNum += input[i];
        }
    }
    return [num, negativeNum];
}