

function Account(currentBalance = 0) {
  this.currentBalance = currentBalance;
  this.transactions = []
}

Account.prototype.deposit = function(amount, transaction = Transaction) {
  this.currentBalance += amount
  this.transactions.push(new transaction("credit", amount, this.currentBalance))
};
Account.prototype.withdraw = function (amount, transaction = Transaction) {
  if (this.currentBalance > amount) {
    this.currentBalance -= amount
    this.transactions.push(new transaction("debit", amount, this.currentBalance))
  } else { console.log("You don't have enough money, get a job.") }
};
