class Store<Type> {
    item: Type;
    constructor(item: Type) {
        this.item = item;
    }
    show() {
        console.log(this.item);
    }
}
let brand= new Store<string>("Laptop");
brand.show();

let y= new Store<number>(50000);
y.show();
