const determineTime=(durations)=>{
  let time = 0;
  for(let el of durations) {
    [h,m,s] = el.split(':');
    time += +h * 3600 + +m * 60 + +s;
  }
  return time<= 24 * 3600;
}