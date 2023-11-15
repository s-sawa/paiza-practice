const lines = ["1080"];

const discountedAmount = (num, base) => Math.floor(num / base) * base;

console.log(discountedAmount(lines[0], 10 ** 2));
