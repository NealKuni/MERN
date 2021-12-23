class User {
  constructor(username, emailAddress) {  // here's what we have so far       
        this.name = username      
        this.email = emailAddress  
        this.accountBalance = 0
    }
    makeDeposit(amount) {                // takes a parameter this is the amount of the deposit
        this.accountBalance += amount;   // the specific user's account increases by the amount of the value received
    }
    makeWithdrawal(amount) {
      this.accountBalance -= amount;
    }
    displayBalance(){
      console.log(this.accountBalance);
    }
    transferMoney(amount, user){
      this.accountBalance -= amount;
      user.accountBalance += amount;
    }
}
const neal = new User('neal','neal@dojo.com');
const alex = new User('alex', 'alex@dojo.com');
const cleo = new User('cloe', 'cleo@dojo.com');

neal.makeDeposit(100);
neal.makeDeposit(100);
neal.makeDeposit(100);

alex.makeDeposit(2000);
alex.makeDeposit(2000);
alex.makeWithdrawal(1000);
alex.makeWithdrawal(1000);

neal.displayBalance();
alex.displayBalance();

neal.transferMoney(100, alex);
neal.displayBalance();
alex.displayBalance();

