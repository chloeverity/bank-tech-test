"use strict";

function Account() {
  this.currentBalance = 0;
  this.history = []
}

Account.prototype.deposit = function(amount) {
  this.currentBalance += amount
  this.history.push(new Transaction("credit", amount, this.currentBalance))
};
Account.prototype.withdraw = function (amount) {
  this.currentBalance -= amount
  this.history.push(new Transaction("debit", amount, this.currentBalance))
};
