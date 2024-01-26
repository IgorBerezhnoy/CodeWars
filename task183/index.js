const zero = (num) => num === undefined ? 0 : Math.floor(eval('0' + num));
const one = (num) => num === undefined ? 1 : Math.floor(eval('1' + num));
const two = (num) => num === undefined ? 2 : Math.floor(eval('2' + num));
const three = (num) => num === undefined ? 3 : Math.floor(eval('3' + num));
const four = (num) => num === undefined ? 4 : Math.floor(eval('4' + num));
const five = (num) => num === undefined ? 5 : Math.floor(eval('5' + num));
const six = (num) => num === undefined ? 6 : Math.floor(eval('6' + num));
const seven = (num) => num === undefined ? 7 : Math.floor(eval('7' + num));
const eight = (num) => num === undefined ? 8 : Math.floor(eval('8' + num));
const nine = (num) => num === undefined ? 9 : Math.floor(eval('9' + num));

function one() {
  if (arguments[0] === undefined) {
    return 1;
  } else {
    return eval('0' + arguments[0]);
  }
}
function two() {
  if (arguments[0] === undefined) {
    return 2;
  }
}
function three() {
  if (arguments[0] === undefined) {
    return 3;
  }
}
function four() {
  if (arguments[0] === undefined) {
    return 4;
  }
}
function five() {
  if (arguments[0] === undefined) {
    return 5;
  }
}
function six() {
  if (arguments[0] === undefined) {
    return 6;
  }
}
function seven() {
  if (arguments[0] === undefined) {
    return 7;
  }
}
function eight() {
  if (arguments[0] === undefined) {
    return 8;
  }
}
function nine() {
  if (arguments[0] === undefined) {
    return 9;
  }
}

const plus=(num)=>'+' + num
const minus=(num)=>'-' + num
const times=(num)=>'*' + num
const dividedBy=(num)=>'/' + num

function minus(num) {
  return '-' + num;
}

function times(num) {
  return '*' + num;
}

function dividedBy(num) {
  return '/' + num;
}

console.log(zero(plus(zero())));