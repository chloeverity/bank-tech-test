"use strict";

function Account() {
  this.currentBalance = 0;
  this.transactions = []
}

Account.prototype.deposit = function(amount) {
  this.currentBalance += amount
  this.transactions.push(new Transaction("credit", amount, this.currentBalance))
};
Account.prototype.withdraw = function (amount) {
  this.currentBalance -= amount
  this.transactions.push(new Transaction("debit", amount, this.currentBalance))
};
