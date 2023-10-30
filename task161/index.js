function pattern(n) {
    let output = '';
    for (let i = 0; i < n; i++) {
        output += '1';
        for (let j = 0; j < 1; j++) {
            for (let k = 0; k < i; k++) {
                output += '*';
            }
            if (i) {
                output += i+1 + '\n';
            } else {
                output += '\n';
            }
        }
    }
    output.slice(0,output.length-1);
    return output.slice(0,output.length-2)
}

console.log(pattern(3));
pattern();