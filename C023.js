const lines = [
  "1 2 3 4 5 6",
  "3",
  "1 5 4 2 3 6",
  "9 6 2 7 1 5",
  "32 9 87 33 41 60",
];

// const lines = [
//   "72 2 90 84 57 85",
//   "3",
//   "36 70 1 72 54 82",
//   "36 2 40 12 3 58",
//   "25 11 90 57 85 99",
// ];

// [1, 2, 3, 4, 5, 6]
const winningNumbers = lines[0].split(" ").map(Number);
// [ [1, 5, 4, 2, 3, 6], [9, 6, 2, 7, 1, 5], [32, 9, 87, 33, 41, 60] ]
const paiza6Lotteries = lines
  .slice(2)
  .map((lotter) => lotter.split(" ").map(Number));
let winningCountArray = [];

const checkWinNumber = (winNums, lotteries) => {
  lotteries.forEach((winNums, lotteries) => {
    // 配列同士の共通する要素だけ取り出してwinningCountArrayに入れる
    winningCountArray = winNums.filter(
      (lotteries) => winningNumbers.indexOf(lotteries) !== -1
    );
    console.log(winningCountArray.length);
  });
};

checkWinNumber(winningNumbers, paiza6Lotteries);
