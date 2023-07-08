function strCount(str, letter){
    let resul=0
    for (let i = 0; i < str.length; i++) {
        if (str[i]===letter){
            resul+=1
        }
    }
    return resul
}