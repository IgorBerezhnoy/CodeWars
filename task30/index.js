function mango(quantity, price) {
  remainder = quantity % 3;
  offer_mango = (((quantity - remainder) * 2) / 3) * price;
  total_cost = offer_mango + remainder * price;
  return total_cost;
}
