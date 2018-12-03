function Account() {
  this.currentBalance = 0;
  this.history = []
}

Account.prototype.deposit = function(amount) {
  this.currentBalance += amount
  this.history.push({date : new Date, value : amount})
};
Account.prototype.withdraw = function (amount) {
  this.currentBalance -= amount
  this.history.push({date : new Date, value : amount})
};
// Account.prototype.printStatement = function () {
//   return this.history
// };
