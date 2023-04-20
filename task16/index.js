function quadrant(x, y) {
  let cordinateX;
  let cordinateY;
  if (x > 0) {
    cordinateX = true;
  } else {
    cordinateX = false;
  }
  if (y > 0) {
    cordinateY = true;
  } else {
    cordinateY = false;
  }
  if (cordinateX == true && cordinateY == true) {
    return 1;
  }
  if (cordinateX == false && cordinateY == true) {
    return 2;
  }
  if (cordinateX == false && cordinateY == false) {
    return 3;
  }
  if (cordinateX == true && cordinateY == false) {
    return 4;
  }
}
