let msg: any = 100;
msg = "Hello";
msg = true;
console.log(msg);

let str: unknown = "TypeScript";
if (typeof str=== "string") {
    console.log(str);
}

function message(): void {
    console.log("Hello World");
}
message();

let msg1: any = "Meghana";    
let num1: unknown = 123;      
function showMessage(): void {   
    console.log("Learning TypeScript");
}
console.log(msg1);
console.log(num1);
showMessage();
