function noBoringZeros(n) {
    debugger
    let result="";
    n = n.toString();
    for (let i = 0; i < n.length; i++) {
        if (n[i] > 0 || n[i + 1] > 0|| n[i + 2] > 0) {
            result += n[i];
        }
    }
    return Number(result);
}

noBoringZeros(2121000500)