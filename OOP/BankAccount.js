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

