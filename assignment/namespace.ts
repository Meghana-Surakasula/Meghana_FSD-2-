namespace Calculator {
    export function square(a: number) {
        return a * a;
    }
    export function cube(a: number) {
        return a * a * a;
    }
    export function double(a: number) {
        return a * 2;
    }
}
console.log(Calculator.square(5));
console.log(Calculator.cube(3));
console.log(Calculator.double(10));
