export const finalPrice = (price, offSale) => {
  return `P${parseInt(price - (price * (offSale / 100))).toFixed(2)}`
}
