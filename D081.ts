// 処理
const calcuTotal = (rows: number, columns: number): number => rows * columns;
const calcuRemainder = (t: number, m: number): number => t % m;

// データセット
const members = Number(lines[0]);
const [numberOfRows, numberOfColumns] = lines[1].split(" ").map(Number);

// 関数呼び出し
const total = calcuTotal(numberOfRows, numberOfColumns);
const reminder = calcuRemainder(total, members);

// 表示
console.log(reminder);
