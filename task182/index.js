function createFunctions(n) {
  const callbacks = [];
  const foo = (x) => () => x;
  for (let i = 0; i < n; i++) {
    callbacks.push(foo(i));
  }
  return callbacks;
}