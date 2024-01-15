const lines: string[] = ["3"]; // 入力

const FIRST_FARE = 100; // 初乗り運賃
const FARE = 10; // 一区間の運賃

const rideCount: number = parseInt(lines[0]);

const totalFare = (firstFare: number, fare: number, count: number): number =>
  firstFare + fare * count;

console.log(totalFare(FIRST_FARE, FARE, rideCount));
