"use strict";
let value = 567;
let sumofDigits = 0;
while (value > 0) {
    sumofDigits += value % 10;
    value = Math.floor(value / 10);
}
console.log("Sum =", sumofDigits);
