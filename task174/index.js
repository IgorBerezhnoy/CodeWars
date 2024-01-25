function printArray(array) {
  if (Array.isArray(array)) {
    return array.join(',');
  } else {
    throw new Error('incorrect value');
  }
}

console.log(printArray(["h","o","l","a"]));