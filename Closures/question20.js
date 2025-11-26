//Question1
function createCounter() {
    let count = 0;   

    return {
        increment: function () {
            count++;
            console.log("Current count:", count);
        },
        decrement: function () {
            count--;
            console.log("Current count:", count);
        },
        show: function () {
            console.log("Current count:", count);
        }
    };
}

const counter = createCounter();
counter.increment(); 
counter.increment(); 
counter.decrement(); 

//Question2

function createBankAccount() {
    let balance = 0;  

    return {
        deposit: function(amount) {
            balance += amount;
            console.log("Deposited:", amount);
        },
        withdraw: function(amount) {
            if (amount > balance) {
                console.log("Insufficient balance");
            } else {
                balance -= amount;
                console.log("Withdrawn:", amount);
            }
        },
        checkBalance: function() {
            console.log("Current Balance:", balance);
        }
    };
}

const account = createBankAccount();
account.deposit(500); 
account.withdraw(200); 
account.withdraw(400); 
console.log(account.balance); 

