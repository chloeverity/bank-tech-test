"use strict";

function Account() {
  this.currentBalance = 0;
  this.history = []
  this.date = getDate()
}

Account.prototype.deposit = function(amount) {
  this.currentBalance += amount
  this.history.push({date : this.date, credit : amount, debit : " ", balance : this.currentBalance})
};
Account.prototype.withdraw = function (amount) {
  this.currentBalance -= amount
  this.history.push({date : this.date, credit : " ", debit : amount, balance : this.currentBalance})
};
function getDate() {
  let date = new Date();
  let formatDate = date.getDate() + '/'
        formatDate += (date.getMonth() + 1) + '/'
        formatDate += date.getFullYear();
  return formatDate;
}
