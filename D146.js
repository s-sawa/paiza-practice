const lines = ["tamago"];

const array = ["a", "e", "i", "u", "o"];
const keys = [/a/g, /e/g, /i/g, /u/g, /o/g];
let newText = lines[0];

for (let i = 0; i < keys.length; i++) {
  newText = newText.replace(keys[i], "");
}
console.log(newText);
