const findDifference=(a, b)=>(b.reduce((a,b)=>a*b)-a.reduce((a,b)=>a*b))<0?(b.reduce((a,b)=>a*b)-a.reduce((a,b)=>a*b))*-1:(b.reduce((a,b)=>a*b)-a.reduce((a,b)=>a*b))