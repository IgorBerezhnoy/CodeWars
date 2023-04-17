var imperialGallon= 4.54609188;
var mile= 1.609344;
function converter (mpg) {
    var sum =mpg/imperialGallon*mile
    sum=sum.toFixed(2)
var sum1=sum*100/100
    return sum1
  }