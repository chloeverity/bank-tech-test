function BankStatement() {
  this.account = new Account()
}


BankStatement.prototype.print = function() {
  return "date || credit || debit || balance"
  console.log(this.account.history);
  length = this.account.history.length;

  console.log(1)
  console.log(this.account)
  for (i=0; i<length; i++){
    var item = this.account.history[i];
    console.log(3);
    console.log( + '||' + '||' + item.currentBalance);
  }
  console.log(2);
};
