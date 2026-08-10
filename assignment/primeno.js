"use strict";
let num = 23;
let prime = true;
if (num <= 1) {
    prime = false;
}
else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            prime = false;
            break;
        }
    }
}
if (prime) {
    console.log(num + " is a Prime Number");
}
else {
    console.log(num + " is Not a Prime Number");
}
