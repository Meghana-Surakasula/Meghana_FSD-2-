class BankAccount {
balance: number;
constructor(balance: number) {
this.balance = balance;
}
deposit(amount: number) {
this.balance += amount;
}
withdraw(amount: number) {
this.balance -= amount;
}
showBalance() {
console.log(this.balance);
}
}
let acc = new BankAccount(5000);
acc.deposit(2000);
acc.withdraw(500);

acc.showBalance();