function cache(func) {
  const cachedResults = new Map();

  return function(...args) {
    const key = JSON.stringify(args);
    if (cachedResults.has(key)) {
      console.log('Cache hit!');
      return cachedResults.get(key);
    } else {
      console.log('Cache miss! Executing complex function...');
      const result = func(...args);
      cachedResults.set(key, result);
      return result;
    }
  };
}