const lines = ["S343"];

const array = lines[0].slice(1).split("").map(Number);
const check = (newArray) => newArray.every((ele) => ele === array[0]);
console.log(check(array) ? "Yes" : "No");
