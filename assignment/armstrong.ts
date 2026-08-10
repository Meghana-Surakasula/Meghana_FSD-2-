let number = 153;
let tmp = number;
let s = 0;
while (number > 0) {
    let digit = number % 10;
    s= s + (digit * digit * digit);
    number = Math.floor(number/ 10);
}
if (s== tmp) {
    console.log("Armstrong number");
} else {
    console.log("Not an Armstrong number");
}
