Object.prototype.hash = function(path) {
  const keys = path.split('.');
  let value = this;

  for (let key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      return undefined;
    }
  }

  return value;
};