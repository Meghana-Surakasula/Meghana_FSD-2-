let word: string = "meghana";
let result: { [key: string]: number } = {};
for (let ch of word) {
if (result[ch]) {
result[ch]++;
} else {
result[ch] = 1;
}
}
console.log(result);