describe("Banke Statement", function() {
  var account;
  var bankStatement;

  beforeEach(function() {
    account = new Account();
    bankStatement = new BankStatement(account);
  });

  it("prints a list of everything in your history", function() {
    expect(bankStatement.print).toEqual("date || credit || debit || balance\n2018/12/3 || || 500.00 || 2500.00")
  })
})
