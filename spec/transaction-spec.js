describe("Bank Statement", function() {
  it("should test for statement to be logged in console", function () {
      console.log = jasmine.createSpy("log");
      var account = new Account();
      BankStatement.print(account);
      expect(console.log).toHaveBeenCalledWith("date || credit || debit || balance");
    });
})
