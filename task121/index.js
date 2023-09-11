let arrOfDoors = [];

for (let i = 1; i <= 100; i++) {
    arrOfDoors.push({name: i, isOpen: false});
}
console.log(arrOfDoors);

for (let i = 0; i <= 99; i++) {
    // debugger
    for (let j = 1; j <= 100; j++) {
        if (arrOfDoors[i].name % j === 0) {
            arrOfDoors[i].isOpen = !arrOfDoors[i].isOpen;
        }
    }
}
console.log(arrOfDoors);
arrOfDoors = arrOfDoors.filter(el => el.isOpen);
console.log(arrOfDoors);