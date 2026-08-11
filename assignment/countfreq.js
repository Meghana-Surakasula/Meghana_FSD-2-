"use strict";
let word = "meghana";
let result = {};
for (let ch of word) {
    if (result[ch]) {
        result[ch]++;
    }
    else {
        result[ch] = 1;
    }
}
console.log(result);
