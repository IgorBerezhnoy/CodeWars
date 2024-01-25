const basicOp = (operation, value1, value2) => {
  switch (operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
    default: {
      throw new Error('incorrect operator');
    }
  }
};


console.log(basicOp('+', 4, 7));
console.log(basicOp('*', 4, 7));
console.log(basicOp('/', 4, 7));
console.log(basicOp('-', 4, 7));
console.log(basicOp('ф', 4, 7));
basicOp('-', 4, 7);
basicOp('*', 4, 7);
basicOp('/', 4, 7);