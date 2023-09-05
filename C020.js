const lines = ["1 80 40"];
// const lines = ["10 31 52"];

  const [m, p, q] = lines[0].split(" ").map(Number);

  const calc = (M, P, Q) => ((M * (100 - P)) / 100) * (1 - Q / 100);

  console.log(calc(m, p, q));