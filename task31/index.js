function integrate(coefficient, exponent) {
    exponent+=1
    coefficient/=exponent
    let result= coefficient+"x^"+exponent
    return result
}