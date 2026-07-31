let value: number = 567;
let sumofDigits: number = 0;
while (value > 0) {
sumofDigits += value % 10;
value = Math.floor(value / 10);
}
console.log("Sum =", sumofDigits);