var humanYearsCatYearsDogYears = function (humanYears) {
  let cat = 0;
  let dog = 0;
  if (humanYears == 0) {
    cat = 0;
  } else if (humanYears == 1) {
    cat += 15;
  } else if (humanYears == 2) {
    cat += 24;
  } else {
    cat = 24 + (humanYears - 2) * 4;
  }
  if (humanYears == 0) {
    dog = 0;
  } else if (humanYears == 1) {
    dog += 15;
  } else if (humanYears == 2) {
    dog += 24;
  } else {
    dog = 24 + (humanYears - 2) * 5;
  }
  var allYears = [];
  allYears[0] = humanYears;
  allYears[1] = cat;
  allYears[2] = dog;
  return allYears;
};
