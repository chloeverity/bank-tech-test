describe("Bank Statement", function() {
  var account;
  // var bankStatement;

  beforeEach(function() {
    account = new Account();
    // bankStatement = new BankStatement(account);
  });

  it("prints a list of everything in your history", function() {
    account.deposit(3000)
    expect(BankStatement.print(account)).toContain("date || credit || debit || balance\n3/12/2018 || 3000 || || 3000")
  })
})
