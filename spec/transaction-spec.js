describe("Transactions", function() {
  var transaction;

  beforeEach(function() {
    transaction = new Transaction("credit", 3000, 3000);
  })
  it("date is a property of each transaction", function() {
    expect(transaction.date.length).toEqual(10)
  })
})
