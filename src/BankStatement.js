function BankStatement() {
  this.account = new Account()
}


BankStatement.prototype.print = function() {
  return "date || credit || debit || balance"
  console.log(this.account.history);
  length = this.account.history.length;


  console.log(this.account)
  for (i=0; i<length; i++){
    var transaction = this.account.history[i];
    console.log(3);
    console.log( + '||' + transaction.credit + '||' + transaction.debit + '||' + transaction.currentBalance);
  }

};
