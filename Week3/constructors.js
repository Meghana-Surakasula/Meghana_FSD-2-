"use strict";
class StudentDetails {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}
let student1 = new StudentDetails("Meghana", 20);
student1.display();
