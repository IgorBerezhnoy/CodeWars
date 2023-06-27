function fakeBin(x){
    let result=""
    for (let i = 0; i < x.length; i++) {
        if (x[i]>=5){
           result= result+"1"
        }else {
            result=result+"0"
        }
    }
    return result
}