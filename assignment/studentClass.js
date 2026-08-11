"use strict";
class Student {
    name;
    rollNo;
    constructor(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
    display() {
        console.log(this.name);
        console.log(this.rollNo);
    }
}
let s1 = new Student("Meghana", 101);
s1.display();
