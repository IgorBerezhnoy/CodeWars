var cubeChecker = function (volume, side) {
    var equal = volume / side / side
    if (equal<=0){
        return false
    }
    if (equal == side) {
        return true;
    } else {
        return false
    }
};