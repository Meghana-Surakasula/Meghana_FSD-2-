let n: number = 8;
let total: number = 0;
for (let i = 1; i < n; i++) {
if (n% i === 0) {
total += i;
}
}
if (total === n) {
console.log("Perfect Number");
} else {
console.log("Not a Perfect Number");
}