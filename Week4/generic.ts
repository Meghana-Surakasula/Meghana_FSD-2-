//generic variables
class Box<T> {
    value: T;
    constructor(value: T) {
        this.value = value;
    }
    display(): void {
        console.log(this.value);
    }
}
let numBox = new Box<number>(100);
let strBox = new Box<string>("Hello");
numBox.display();
strBox.display();
//generic functions
function show<T>(value: T): T {
    return value;
}
console.log(show<number>(10));
console.log(show<string>("Meghana"));
