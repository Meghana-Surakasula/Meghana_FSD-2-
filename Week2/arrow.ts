const add = (a: number, b: number): number => {
    return a + b;
};

const hello = (name: string): string => {
    return "Hello, " + name;
};

let ans: number = add(10, 20);
let message1: string = hello("Meghana");

console.log("Addition:", ans);
console.log(message1);
