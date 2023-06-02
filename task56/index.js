const reverseSeq = n => {
    let arr=[]
    for (let i=1;i<n+1;i++){
        arr.unshift(i)
    }
return arr
};