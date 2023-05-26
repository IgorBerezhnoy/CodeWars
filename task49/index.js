function isPalindrome(x) {
    debugger
    let result=x.split("").reverse().join("")
    return x.toLowerCase()===result.toLowerCase()
}
