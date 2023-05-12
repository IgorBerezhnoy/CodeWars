    function derive(coefficient, exponent) {
    coefficient*=exponent
    exponent-=1
    let result= coefficient+"x^"+exponent
    return result
}