function Statement() {
}

Statement.prototype.print = function(account) {
  console.log("date || credit || debit || balance")
  var length = account.transactions.length;
  for (var i=length-1;i>=0;i--){
    var item = account.transactions[i];
  console.log(item.date + ' || ' + item.credit + ' || ' + item.debit + ' || ' + item.currentBalance);
  }
};
