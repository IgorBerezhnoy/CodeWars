function addLength(str) {
    debugger
let newStr=str.split(" ")
    for (let i = 0; i <newStr.length ; i++) {
        newStr[i]+=" "+newStr[i].length
    }
    return newStr
}
addLength("apple ban")