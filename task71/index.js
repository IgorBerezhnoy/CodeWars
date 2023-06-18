function countSheeps(arrayOfSheep) {
  debugger
  let counter=0
  for (let i = 0; i <arrayOfSheep.length ; i++) {
    if (arrayOfSheep[i]){
      counter+=1
    }
  }
  return counter
}
const a= [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true ]
countSheeps(a)