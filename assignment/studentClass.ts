class Student {
name: string;
rollNo: number;
constructor(name: string, rollNo: number) {
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