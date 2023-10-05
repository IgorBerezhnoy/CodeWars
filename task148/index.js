function flickSwitch(arr) {
    let newArr = [];
    let bol = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'flick') {
            bol = !bol;
        }
        newArr.push(bol);
    }
    return newArr
}