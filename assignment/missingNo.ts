let arr: number[] = [1, 2, 4, 5];
let x: number = 5;
let tot = (x* (x + 1)) / 2;
let current = 0;
for (let num of arr) {
current += num;
}
console.log("Missing =", tot - current);