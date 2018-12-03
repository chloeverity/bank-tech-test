"use strict";

var BankStatement = (function () {

  var transactionDate = function(date){
    var format = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    return format;

  }

  

  var print = function(account) {
    return "date || credit || debit || balance"
    var length = account.history.length;
    for (var i=0;i<length;i++){
      var transaction = account.history[i];
      return transactionDate(transaction.date) + ' || ' + transaction.credit + ' || ' + transaction.debit + ' || ' + transaction.balance;
    }
  }
return {print:print};

})()
