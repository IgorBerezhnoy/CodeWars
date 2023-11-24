const anyArrows = (arrows) => {
  if (arrows.length <= 0) {
    return false;
  }
  let count = 0;
  for (let i = 0; i < arrows.length; i++) {
    if (arrows[i].damaged !== true) {
      count++
    }
  }
  return count>0
};