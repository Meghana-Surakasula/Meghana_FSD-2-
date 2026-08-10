"use strict";
let data = [34, 56, 34, 66, 778, 89];
let duplicates = [];
for (let item of data) {
    if (data.indexOf(item) !== data.lastIndexOf(item)) {
        if (!duplicates.includes(item)) {
            duplicates.push(item);
        }
    }
}
console.log(duplicates);
