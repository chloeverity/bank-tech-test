describe("Bank Statement", function() {
  var account;
  var bankStatement;

  beforeEach(function() {
    account = new Account();
    bankStatement = new BankStatement(account);
  });

  it("prints a list of everything in your history", function() {
    account.deposit(3000)
    account.withdraw(500)
    expect(bankStatement.print()).toContain("date || credit || debit || balance\n2018/12/3 || || 500 || 2500\n2018/12/3 || 3000 || || 3000")
  })
})
