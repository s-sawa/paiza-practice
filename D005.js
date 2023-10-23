const lines = ["3 3"];
const [firstNumber, number] = lines[0].split(" ").map(Number);

const calulate = (fn, n) => {
  const array = [];
  for (i = 0; i < 10; i++) {
    array.push(fn + n * i);
  }
  return array;
};
console.log(...calulate(firstNumber, number));
