String.prototype.toAlternatingCase = function () {
    let oldStr = this.split('');
    let newStr = '';
    for (let i = 0; i < oldStr.length; i++) {
        if (oldStr[i] === String[i].toUpperCase()) {
            newStr += oldStr[i].toLowerCase();
        } else {
            newStr += oldStr[i].toUpperCase();
        }
    }
    return newStr;
};
String.prototype.toAlternatingCase = function () {
    var newStr = this.split('');
    var result = '';
    newStr.forEach(function (el) {
        if (el === el.toUpperCase()) {
            result += el.toLowerCase();/*from  w  w  w.j a v a2  s . c  o m*/
        } else {
            result += el.toUpperCase();
        }
    });
    return result;
};

console.log('hElLo'.toAlternatingCase()); // 'HeLlO'
// console.log(new);

///websoket
//http
//cors
//e
//перегрузка методава
//
//


