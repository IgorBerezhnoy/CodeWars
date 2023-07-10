function shortcut(string) {
    let result = '';
        for (let j = 0; j < string.length; j++) {
            if (string[j] !=="a"&&string[j] !=="i"&&string[j] !=="o"&&string[j] !=="e"&&string[j] !=="u") {
                result += string[j];
            }

    }
    return result
}