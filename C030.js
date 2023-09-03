const lines = ["3 2", "128 127", "127 128", "128 127"];
// const lines = ["1 1", "0"];

// [ [ 128, 127 ], [ 127, 128 ], [ 128, 127 ] ]
const pixelValues = lines.slice(1).map((num) => num.split(" ").map(Number));

const convertToBinary = (pixelValues) => {
  return pixelValues.map((values) =>
    values.map((value) => (value >= 128 ? 1 : 0))
  );
};

// [ [ 1, 0 ], [ 0, 1 ], [ 1, 0 ] ]
// console.log(convertToBinary(pixelValues));
convertToBinary(pixelValues).forEach((result) => console.log(...result))