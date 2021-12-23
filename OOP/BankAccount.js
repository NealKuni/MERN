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

const account1 = new BankAccount(.01, 10000);
const account2 = new BankAccount(.05, 1000);

account1.deposit(500).deposit(500).deposit(500).yieldInterest().displayAccountInfo();
account2.deposit(500).deposit(500).withdraw(100).withdraw(100).withdraw(100).withdraw(100).displayAccountInfo();
