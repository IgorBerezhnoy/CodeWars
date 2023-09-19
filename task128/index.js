function twoHighest(arr) {

    if (arr.length === 0) {
        return arr;
    }

    arr = [...new Set(arr)]
    if (arr.length === 1) {
        return arr;
    }
    arr = arr.sort(function(a, b) { return a - b; }).reverse();

    return arr.slice(0,2);
}

twoHighest([])
twoHighest([15])
console.log(twoHighest([15, 20, 20, 17]))
