let text: string = "meghana";
let res: string = "";
for (let ch of text) {
if (!res.includes(ch)) {
res += ch;
}
}
console.log(res);