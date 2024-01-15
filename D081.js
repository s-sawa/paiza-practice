// 処理
const calcuTotal: number = (rows, columns) => rows * columns;
const calcuRemainder = (t, m) => t % m;

// データセット
const members = Number(lines[0]);
const [numberOfRows, numberOfColumns] = lines[1].split(" ").map(Number);

// 関数呼び出し
const total = calcuTotal(numberOfRows, numberOfColumns);
const reminder = calcuRemainder(total, members);

// 表示
console.log(reminder);
