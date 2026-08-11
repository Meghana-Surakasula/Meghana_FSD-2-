"use strict";
class EmployeeDetails {
    name;
    salary;
    department;
    constructor(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    displayDetails() {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
        console.log("Department:", this.department);
    }
}
let emp = new EmployeeDetails("Meghana", 50000, "IT");
emp.displayDetails();
console.log("Employee Name:", emp.name);
