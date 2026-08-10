class StudentN {
readonly id: number;
name: string;
constructor(id: number, name: string) {
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