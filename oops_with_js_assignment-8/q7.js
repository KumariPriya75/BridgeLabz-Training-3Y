function show(message) {
    document.getElementById("output").textContent += message + "\n";
}

class BankAccount {
    #balance;

    constructor(balance) {
        this.#balance = balance;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be greater than zero.");
        }
        this.#balance += amount;
        show("Deposited Rs. " + amount);
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be greater than zero.");
        }
        if (amount > this.#balance) {
            throw new Error("Insufficient balance.");
        }
        this.#balance -= amount;
        show("Withdrawn Rs. " + amount);
    }

    getBalance() {
        return this.#balance;
    }
}

let account = new BankAccount(1000);

try {
    account.deposit(500);
    show("Balance: Rs. " + account.getBalance());
} catch (error) {
    show(error.message);
}

try {
    account.withdraw(2000);
} catch (error) {
    show("Transaction failed: " + error.message);
}

show("Final balance: Rs. " + account.getBalance());
