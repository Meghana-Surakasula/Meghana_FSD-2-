"use strict";
class Store {
    item;
    constructor(item) {
        this.item = item;
    }
    show() {
        console.log(this.item);
    }
}
let brand = new Store("Laptop");
brand.show();
let y = new Store(50000);
y.show();
