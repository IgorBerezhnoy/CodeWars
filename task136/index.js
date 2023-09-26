
let str = 'Click the button to convert to camelCase';
let foo=(str)=>{
    debugger
    str= str.split(" ")
    for (let i = 0; i < str.length; i++) {
        if (i===0){
            str[0]=str[0].toLowerCase()
        }else {
            str[i]=str[i][0].toUpperCase()+str[i].slice(1)
        }
    }
        return str.join("")
}
console.log(foo(str));