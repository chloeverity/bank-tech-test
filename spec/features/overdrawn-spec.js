describe("Printing refusal to withdraw", function() {
  it("should test for statement to be logged in console", function () {
      console.log = jasmine.createSpy("log");
      var account = new Account();
      account.deposit(10)
      account.withdraw(11)
      expect(console.log).toHaveBeenCalledWith("You don't have enough money, get a job.");
    });
})
