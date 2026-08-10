"use strict";
let items = [23, 34, 56, 77, 88];
let pos = 2;
let rotatedArr = items.slice(pos).concat(items.slice(0, pos));
console.log(rotatedArr);
