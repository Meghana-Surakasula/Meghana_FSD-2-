class EmployeeDetails {
    public name: string;
    private salary: number;
    protected department: string;

    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    public displayDetails(): void {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
        console.log("Department:", this.department);
    }
}

let emp = new EmployeeDetails("Meghana", 50000, "IT");
emp.displayDetails();
console.log("Employee Name:", emp.name);
