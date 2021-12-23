class User {
  constructor(username, emailAddress) {  // here's what we have so far       
        this.name = username      
        this.email = emailAddress  
        this.accountBalance = 0
    }
    makeDeposit(amount) {                // takes a parameter this is the amount of the deposit
      this.accountBalance += amount;   // the specific user's account increases by the amount of the value received
      return this;
    }
    makeWithdrawal(amount) {
      this.accountBalance -= amount;
      return this;
    }
    displayBalance(){
      console.log(this.accountBalance);
      return this;
    }
    transferMoney(amount, user){
      this.accountBalance -= amount;
      user.accountBalance += amount;
      return this;
    }
}

const neal = new User('neal','neal@dojo.com');
const alex = new User('alex', 'alex@dojo.com');
const cleo = new User('cloe', 'cleo@dojo.com');

neal.makeDeposit(100).makeDeposit(100).makeDeposit(100).displayBalance();

alex.makeDeposit(2000).makeDeposit(2000).makeWithdrawal(1000).makeWithdrawal(1000).displayBalance();

neal.transferMoney(100, alex).displayBalance();
alex.displayBalance();

