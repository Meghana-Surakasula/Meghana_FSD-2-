"use strict";
class Employee {
    name;
    salary;
    team;
    constructor(name, salary, team) {
        this.name = name;
        this.salary = salary;
        this.team = team;
    }
    show() {
        console.log(this.name);
        console.log(this.salary);
        console.log(this.team);
    }
}
class Lead extends Employee {
    displayTeam() {
        console.log(this.name);
        console.log(this.team);
    }
}
let e = new Employee("Meghana", 50000, "Analytics");
e.show();
