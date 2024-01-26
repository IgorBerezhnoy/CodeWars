const Cat = (function () {
  const cats = [];

  function Cat(name, weight) {
    if (!name || !weight) {
      throw new Error('Both name and weight must be specified');
    }

    Object.defineProperty(this, 'name', {
      get: function () {
        return name;
      },
      set: function (value) {
        name = value;
      }
    });

    Object.defineProperty(this, 'weight', {
      get: function () {
        return weight;
      },
      set: function (value) {
        const previousWeight = weight;
        weight = value;
        const weightDifference = weight - previousWeight;
        Cat.totalWeight += weightDifference;
      }
    });

    cats.push(this);
    Cat.totalWeight += weight;
  }

  Cat.totalWeight = 0;

  Cat.averageWeight = function () {
    return Cat.totalWeight / cats.length;
  };

  return Cat;
})();