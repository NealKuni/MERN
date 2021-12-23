class User {
  constructor(username, emailAddress) {  // here's what we have so far       
        this.name = username      
        this.email = emailAddress  
        this.checkings = new BankAccount(intRate=0.02, balance=0)
        this.savings = new BankAccount(intRate=0.04, balance=0)
    }
    makeDeposit(amount, accountType ) {
      if (accountType == this.checkings) {
        this.checkings.deposit(amount); 
       } else if (accountType == this.savings){
        this.savings.deposit(amount)
       } else {
        return this;
       }
    }
    makeWithdrawal(amount, accountType) {
      this.checkings.withdraw(amount);
      return this;
    }
    displayBalance(accountType){
      console.log(this.checkings.displayAccountInfo());
      return this;
    }
    transferMoney(amount, user, accountType){
      this.checkings -= amount;
      user.checkings += amount;
      return this;
    }
}

class BankAccount {
  constructor(intRate, balance) {      
      this.intRate = intRate;
      this.balance = balance;
  }
  deposit(amount) {
      this.balance += amount;
      return this;
  }
  withdraw(amount) {
      if (this.balance <= 0) {
        this.balance -= 5;
        console.log("Insufficient funds: Charging a $5 fee");
      } else {
        this.balance -= amount;
      }
      return this;
  }
  displayAccountInfo(){
      console.log("Balance: $" + this.balance)
      return this;
  }
  yieldInterest(){
      this.balance * this.intRate;
      return this;
  }
}

