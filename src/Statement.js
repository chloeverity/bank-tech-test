function Statement() {
}

Statement.prototype.print = function(account) {
  console.log("date || credit || debit || balance")
  var length = account.transactions.length;
  for (var i=0;i<length;i++){
    var item = account.transactions[i];
  console.log((item.date) + ' || ' + item.credit + ' || ' + item.debit + ' || ' + item.currentBalance);
  }
};
