function Statement(account) {
  this.account = account
}

Statement.prototype.print = function() {
  console.log("date || credit || debit || balance")
  var length = this.account.transactions.length;
  for (var i=length-1; i>=0; i--){
    var item = this.account.transactions[i];
  console.log(item.date + ' || ' + item.credit + ' || ' + item.debit + ' || ' + item.currentBalance);
  }
};
