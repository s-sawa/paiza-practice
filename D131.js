const lines = ["012"];

const numbers = lines[0].split("").map(Number);

const check = (array) =>
  array.map((ele) => {
    if (ele === 0) {
      return "C";
    } else if (ele === 1) {
      return "A";
    } else {
      return "B";
    }
  });

console.log(check(numbers).join(""));
