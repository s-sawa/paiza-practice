const lines = ["4", "5", "101", "204", "301", "401", "501"];
// const lines = ["9", "3", "409", "509", "109"];
// const lines = ["1", "6", "101", "102", "205", "224", "231", "314"];





// hatedNumber=4, roomNumbers = [ '101', '204', '301', '401', '501' ] 文字型
const [hatedNumber, , ...roomNumbers] = lines.flatMap((el) => el.split(" "));

// [false, true, false, true, false] 嫌いな数字が含まれる= true
const checkRoomNumber = (number, roomNumber) =>
  roomNumber.map((rNum) => rNum.includes(number));

const booleanArray = checkRoomNumber(hatedNumber, roomNumbers);
//boolean配列に、嫌いな数字しかない場合
if (booleanArray.includes(false) === false) {
  console.log("none");
} else {
  booleanArray.forEach((boolean, i) => {
    boolean === false ? console.log(roomNumbers[i]) : null;
  });
}