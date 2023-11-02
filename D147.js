const data = lines[1].split(" ").map(Number);

const check = (data) => Math.min(...data);

const minData = check(data);
console.log(minData * lines[0]);
