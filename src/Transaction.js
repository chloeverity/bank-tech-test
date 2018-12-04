

function Transaction(type, amount, currentBalance) {
  this.date = dateToday();
  this.credit = "";
  this.debit = "";
  this.currentBalance = currentBalance

  if (type === "credit") {
    this.credit = amount;
  } else {
    this.debit = amount
  }
}
