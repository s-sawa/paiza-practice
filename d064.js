const lines = ["if False"];

const convert = (text) => text.replace(/False/g, "True");

console.log(convert(lines[0]));
