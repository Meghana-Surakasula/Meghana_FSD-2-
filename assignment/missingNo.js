"use strict";
let arr = [1, 2, 4, 5];
let x = 5;
let tot = (x * (x + 1)) / 2;
let current = 0;
for (let num of arr) {
    current += num;
}
console.log("Missing =", tot - current);
