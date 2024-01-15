var lines = ["3"]; // 入力
var FIRST_FARE = 100; // 初乗り運賃
var FARE = 10; // 一区間の運賃
var rideCount = parseInt(lines[0]);
var totalFare = function (firstFare, fare, count) {
    return firstFare + fare * count;
};
console.log(totalFare(FIRST_FARE, FARE, rideCount));
