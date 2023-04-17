function contamination(text, char){
    var symbol=""
   if (text==""||char=="") {
    return symbol
   } 
   for (let i = 0; i < text.length; i++) {
    symbol+=char
   }
   return symbol
  }