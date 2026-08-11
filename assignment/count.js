"use strict";
let values = [5, 5, 1, 3, 3, 3, 4, 4, 4];
let count = {};
for (let value of values) {
    if (count[value]) {
        count[value]++;
    }
    else {
        count[value] = 1;
    }
}
console.log(count);
