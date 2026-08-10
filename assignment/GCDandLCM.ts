let first: number = 20;
let second: number = 45;
let gcd: number = 1;
for (let i = 1; i <= first; i++) {
if (first % i === 0 && second % i === 0) {
gcd = i;
}
}
let lcm = (first * second) / gcd;
console.log("GCD =", gcd);
console.log("LCM =", lcm);