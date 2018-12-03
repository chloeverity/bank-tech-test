"use strict";

var BankStatement = (function () {

  var transactionDate = function(date){
    var format = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    console.log(4)
    return format;

  }

  var print = function(account) {
    "date || credit || debit || balance"
    var length = account.history.length;
    for (var i=0;i<length;i++){
      console.log(2);
      var transaction = account.history[i];
      console.log(transactionDate(transaction.date) + transaction.credit + transaction.debit + transaction.balance);
    }
  }
return {print:print};

})()
