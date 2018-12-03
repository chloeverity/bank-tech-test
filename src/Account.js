function Account() {
  this.currentBalance = 0;
  this.history = []
}

Account.prototype.deposit = function(amount) {
  this.currentBalance += amount
  this.history.push({date : new Date, credit : amount, debit : " ", balance : this.currentBalance})
};
Account.prototype.withdraw = function (amount) {
  this.currentBalance -= amount
  this.history.push({date : new Date, credit : " ", debit : amount, balance : this.currentBalance})
};
