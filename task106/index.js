function lowercaseCount(str){
    let result=0
    let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (let i = 0; i <arr_en.length ; i++) {
        for (let j = 0; j < str.length; j++) {
         if   (str[j]===arr_en[i]){
             result++
             continue
         }
        }
    }
    return result
}