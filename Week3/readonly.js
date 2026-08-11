"use strict";
class Student {
    static schoolName = "SVECW";
    // Readonly member (cannot be changed after initialization)
    rollNo;
    name;
    constructor(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
    display() {
        console.log("Name:", this.name);
        console.log("Roll No:", this.rollNo);
        console.log("School:", Student.schoolName);
    }
}
const s1 = new Student("Meghana", 101);
const s2 = new Student("Swetha", 102);
console.log(Student.schoolName);
s1.display();
s2.display();
Student.schoolName = "VITB";
console.log(Student.schoolName);
