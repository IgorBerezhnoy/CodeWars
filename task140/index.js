function gooseFilter(birds) {
    let geese = new Set(['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher']);
    console.log(geese);
    return birds.filter(el => !geese.has(el));

//     // return an array containing all of the strings in the input array except those that match strings in geese
};

function gooseFilter1 (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(b => !geese.includes(b));
};

function gooseFilter2 (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter( bird => geese.indexOf(bird) < 0 );
};