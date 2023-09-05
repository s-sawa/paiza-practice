const lines = ["3 4", "2", "1"];
// const lines = ["4 10", "3", "4", "5"];


  const [paperCount, length] = lines[0].split(" ").map(Number);
  const dataArray = lines.slice(1).map(Number);

  // マイナスする辺の長さの合計求める関数
  const calc = (array) => array.reduce((acc, curr) => acc + curr);

  // 面積計算関数
  const calcArea = (count, len, datas) => (count * len - calc(dataArray)) * len;

  // 出力
  console.log(calcArea(paperCount, length, dataArray));