const results = lines.slice(1).map((item) => item.split(" "));

const getResult = (resultArray) => {
  const newArray = resultArray.filter((result, index) => {
    let result1 = result[0] === "y" ? 1 : 0;
    let result2 = result[1] === "y" ? 1 : 0;
    return result1 * result2 === 0;
  });
  return newArray;
};

console.log(getResult(results).length);
getResult(results).forEach((item, index) => console.log(index + 1));
