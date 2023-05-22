function splitAndMerge(string, separator) {
   debugger
    let arr
    let arr1
    arr= string.split("")
   for (let i =0;i<arr.length;i++){
       if (arr[i]===" "){

       }else {
           arr1+=arr[i]
       }
       arr1=arr1.join(separator)
   }

   return arr1
}
