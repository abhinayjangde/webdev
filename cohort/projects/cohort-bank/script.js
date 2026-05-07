function BankAccount(customerName, balance=0){
    this.customerName = customerName
    this.accountNumber = Date.now() + Math.floor(Math.random() * 10)
    this.balance = balance

    this.deposit = function(amount){
        this.balance += amount
    }
    this.withdraw = function(amount){
        if(this.balance - amount < 0){
            console.log("You don't have sufficient balance", "Current balance is", this.balance)
            return
        }
        this.balance -= amount
    }
}


// const abhiAccount = new BankAccount("Abhinay", 1000)
// const aryaAccount = new BankAccount("Arya")

// // abhiAccount.deposit(2000)
// // abhiAccount.withdraw(3000)
// abhiAccount.withdraw(900)
// abhiAccount.withdraw(90)

// console.log(abhiAccount)
// console.log(aryaAccount)

const accounts = []
const accountForm = document.querySelector("#accountForm")
const customerName = document.querySelector("#customerName")
const balance = document.querySelector("#balance")

accountForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const account = new BankAccount(customerName.value, Number(balance.value))
    accounts.push(account)
    console.log(accounts)
})

// Deposite
const depositForm = document.querySelector("#depositForm")
const accountNumber = document.querySelector("#accountNumber")
const amount = document.querySelector("#amount")

depositForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const account = accounts.find((account)=> account.accountNumber === Number(accountNumber.value))
    account.deposit(Number(amount.value))
    console.log(accounts)

})
