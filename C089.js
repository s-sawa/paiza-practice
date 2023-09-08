// oxと数字を照らし合わせたい
// パネルの状態の配列と、得点の配列を作成する
// パネルと得点、それぞれ1文字ずつの配列にする
// mapの中で1文字ずつパネルのステータスを見て、oなら得点、xなら0点を返す

const lines = [
  "4 3",
  "oxo",
  "oox",
  "oxo",
  "xxx",
  "1 2 3",
  "4 5 6",
  "7 8 9",
  "10 11 12",
];


const [rows, columns] = lines[0].split(" ").map(Number);
const panelStatusArray = lines
  .slice(1, rows + 1)
  .join("")
  .split("");
const pointArray = lines
  .slice(rows + 1)
  .flatMap((str) => str.split(" ").map(Number));

// 関数
const getPointArray = (statuses, points) =>
  points.map((point, i) => (statuses[i] === "o" ? point : 0));

// 出力
console.log(
  getPointArray(panelStatusArray, pointArray).reduce(
    (acc, curr) => acc + curr,
    0
  )
);
