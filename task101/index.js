function drawStairs(n) {
    let result ="I"
    if (n===1){
        return result
    }
    result=""
    for (let i = 1; i < n; i++) {
        result= result+"I\n "
    }
    return  result+"I"
}