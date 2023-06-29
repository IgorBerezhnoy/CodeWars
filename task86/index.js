function setAlarm(employed, vacation){
if(employed===true&&vacation===true){
    return false
}if(employed&&vacation===false){
    return true
}if(employed === false && vacation){
    return false
}if(employed===false&&vacation===false){
    return false
}

}