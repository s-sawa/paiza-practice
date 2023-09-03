
const lines = ["5 110 120", "110", "100", "120", "130", "105"];
// const lines = ["3 100 200", "80", "80", "30"];





const [days, lowerPriceThreshold, upperPriceThreshold] = lines[0]
  .split(" ")
  .map(Number);
const stockPriceChanges = [...lines.slice(1).map(Number)];

let profit = 0;
let stock = 0;

const calculateProfit = (price, lowerThreshold, upperThreshold, i, day) => {
  if (price <= lowerThreshold) {
    if (i !== day - 1) {
      profit -= price;

      stock++;
    } else {
      profit = profit + price * stock;
    }
  }
  if (price >= upperThreshold) {
    if (i !== day - 1) {
      profit += price * stock;
      stock = 0;
    } else {
      profit += price * stock;
    }
  }
  return profit;
};

const profits = stockPriceChanges.map((stockPrice, index) => {
  return calculateProfit(
    stockPrice,
    lowerPriceThreshold,
    upperPriceThreshold,
    index,
    days
  );
});

// 出力
console.log(profits.slice(-1)[0]);
