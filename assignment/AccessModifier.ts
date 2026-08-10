class Employee {

public name: string;
private salary: number;

protected team: string;

constructor(name: string, salary: number, team: string) {
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