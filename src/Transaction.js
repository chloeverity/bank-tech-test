"use strict";

function Transaction(type, amount, currentBalance) {
  this.date = dateToday();
  this.credit = null
  this.debit = null
  this.currentBalance = currentBalance

  if (type === "credit") {
    this.credit = amount;
  } else {
    this.debit = amount
  }
}
