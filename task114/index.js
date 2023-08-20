function array(string) {
  if (string.split(",").length<=2){
      return null
  }
  debugger
  let result=string.split(",")
      result=result.slice(1,(result.length-1))
      result=result.join(" ")

  return result
}