const lines = ["100paiza"];

const regex = /[0-9]/g;
const found = lines[0].match(regex);
console.log(found.join(""));
