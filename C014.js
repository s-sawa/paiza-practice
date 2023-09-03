const lines = ["4 2", "6 6 6", "4 6 4", "6 1 1", "4 4 4"];
// const lines = ["3 5", "2 184 12", "135 169 37", "99 121 41"];
// const lines = [ "5 7", "197 78 14", "14 197 62", "80 14 109", "138 145 147", "9 130 175",];

const [, r] = lines[0].split(" ").map(Number);
const boxSizeArray = lines.slice(1).map((size) => size.split(" ").map(Number));

const checkFitInBox = (sizeArray) => {
  sizeArray.forEach((size, index) => {
    if (size[0] >= r * 2 && size[1] >= r * 2 && size[2] >= r * 2) {
      console.log(index + 1);
    }
  });
};

// isじゃない方がよかったね
checkFitInBox(boxSizeArray);
