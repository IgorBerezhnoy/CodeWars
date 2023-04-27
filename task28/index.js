function hero(bullets, dragons) {
  debugger;
  if ((bullets > dragons && bullets / 2 >= dragons) || bullets + dragons == 0) {
    return true;
  } else {
    return false;
  }
}
