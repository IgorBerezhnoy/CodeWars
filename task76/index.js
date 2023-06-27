const betterThanAverage=(classPoints, yourPoints)=> {
    let sumPoints=0
    for (let i = 0; i <classPoints.length ; i++) {
        sumPoints+=classPoints[i]
    }
    return yourPoints>sumPoints/classPoints.length
}
