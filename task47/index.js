function digitize(n) {
    let arr = [];
    arr.push(n.toString());
    let arrChars = arr[0].split('');
    let arr2 = [];
    for (let i = 0; i < arrChars.length; i++) {
        arr2.unshift(Number(arrChars[i]));
    }
    return arr2;
}

digitize(115645645);