
class Account {
    constructor(accountNumber, owner) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.transactions = [];
    }
    balance() {
        const reducer = (acc, cur) => acc + cur
        return this.transactions.reduce(reducer);
    }
    deposit(amount) {
        if (amount <= 0) {
            console.log('You cannot depoit a negative amount.')
        } else {
            return this.transactions.push(amount)
        }
    }
    charge(amount, payee) {
        console.log('***', this.balance())
        if ((this.balance() - amount) > 0) {
            new Transaction(amount, payee)
            return this.transactions.push(amount *= -1)
        } else {
            console.log("Transaction declined")
            return false
        }
    }
}

class Transaction {
    constructor(amount, payee) {
        this.date = Date();
        this.amount = amount;
        this.payee = payee;
    }
}

class Savings extends Account {
    constructor(interestRate, accountNumber, owner) {
        super(accountNumber, owner)
        this.interestRate = interestRate
    }
    accrueInterest() {
        let balance = this.balance()
        balance = (balance * this.interestRate)
        this.deposit(balance)
    }
}


let newAccount = new Account(12345 , "Darryl")
newAccount.deposit(10)
newAccount.charge(9, 'apple')
console.log('!!', newAccount.balance())
console.log(newAccount.transactions)

let newSavings = new Savings(0.2, 12345, "Darryl")
newSavings.deposit(20)
console.log(newSavings.balance())
newSavings.accrueInterest()
console.log(newSavings.balance())
console.log(newSavings.transactions)

