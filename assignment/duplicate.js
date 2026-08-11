"use strict";
let text = "meghana";
let res = "";
for (let ch of text) {
    if (!res.includes(ch)) {
        res += ch;
    }
}
console.log(res);
