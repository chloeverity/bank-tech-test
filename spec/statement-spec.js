describe("Bank Statement", function() {
  it("should test for statement to be logged in console", function () {
      console.log = jasmine.createSpy("log");
      var account = new Account();
      account.deposit(10)
      var statement = new Statement(account);
      statement.print();
      expect(console.log).toHaveBeenCalledWith("date || credit || debit || balance");
      expect(console.log).toHaveBeenCalledWith("04/12/2018 || 10 ||  || 10");
    });
})
