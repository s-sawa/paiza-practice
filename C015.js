const getPoint = (receipts) =>
  receipts.map((data) => {
    let rate = 0.01;
    if (data[0].includes("3")) {
      rate = 0.03;
    } else if (data[0].includes("5")) {
      rate = 0.05;
    }

    return Math.floor(rate * data[1]);
  });

const receiptsData = lines.slice(1).map((i) => i.split(" "));
console.log(
  getPoint(receiptsData).reduce((acc, curr) => acc + curr),
  0
);
