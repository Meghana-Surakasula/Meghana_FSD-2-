"use strict";
class StudentN {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    display() {
        console.log(this.id);
        console.log(this.name);
    }
}
let student = new StudentN(116, "Meghana");
student.display();
