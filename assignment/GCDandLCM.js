"use strict";
let first = 20;
let second = 45;
let gcd = 1;
for (let i = 1; i <= first; i++) {
    if (first % i === 0 && second % i === 0) {
        gcd = i;
    }
}
let lcm = (first * second) / gcd;
console.log("GCD =", gcd);
console.log("LCM =", lcm);
