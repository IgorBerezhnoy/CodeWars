//return price without vat
const excludingVatPrice=(price)=>price?(price/115*100).toFixed(2):-1