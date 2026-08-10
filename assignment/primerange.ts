let start: number = 20;
let end: number = 40;
for (let n = start; n <= end; n++) {
let prime = true;
if (n <= 1) {
prime = false;
}
for (let i = 2; i <= n / 2; i++) {
if (n % i === 0) {
prime = false;
break;
}
}
if (prime) {
console.log(n);
}
}