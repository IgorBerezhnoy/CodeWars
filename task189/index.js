Array.prototype.square = function() {return this.map(el => el * el);};
Array.prototype.cube = function() {return this.map(el => el * el*el);};
Array.prototype.average = function() {return this.length<1? NaN :this.reduce((acc, val) => acc + val, 0) / this.length};
Array.prototype.sum = function() {return this.reduce((acc, val) => acc + val, 0)};
Array.prototype.even = function() { return this.filter(num => num % 2 === 0)};
Array.prototype.odd = function() { return this.filter(num => num % 2 !== 0)};

