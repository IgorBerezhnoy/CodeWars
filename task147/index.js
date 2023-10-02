const mergeArrays=(a, b)=>[...new Set(a.concat(b))].sort((a,b)=>a-b)
