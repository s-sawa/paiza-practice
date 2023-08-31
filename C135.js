
const lines = ["3 20", "100 7"];

// 分割代入の関数
  const toArray = array => array.flatMap((item) => item.split(" ").map(Number));
  
  // [4, 60, 100, 10]
  const[discountCount, discountRate, price, quantity] = toArray(lines);
  
  // 割引後の合計価格求める関数
  const getTotalDiscountedPrice = (discountCount, discountRate, price, quantity) => {
      return Math.floor(price * discountCount * (1 - discountRate / 100) * Math.floor(quantity / discountCount));
  }
  // 割引前の合計価格求める関数
  const getTotalOriginalPrice = (discountCount, discountRate, price, quantity) => {
      return Math.floor((quantity % discountCount) * price);
  }
  
  const totalDiscountedPrice = getTotalDiscountedPrice(discountCount, discountRate, price, quantity);
  const totalOriginalPrice = getTotalOriginalPrice(discountCount, discountRate, price, quantity);

  // 合計価格求める関数
  const getTotalPrice = (totalDPrice, totalOPrice) => totalDPrice + totalOPrice;

  // 出力
  console.log(getTotalPrice(totalDiscountedPrice, totalOriginalPrice));