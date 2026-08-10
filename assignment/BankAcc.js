"use strict";
class BankAccount {
    balance;
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
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
