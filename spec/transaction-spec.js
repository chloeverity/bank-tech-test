describe("Transactions", function() {
  var transaction;

  beforeEach(function() {
    transaction = new Transaction("credit", 3000, 3000);
  })
  it("date is a property of each transaction", function() {
    expect(transaction.date.length).toEqual(10)
  })
  it('credit is a property of each transaction', function() {
    expect(transaction.credit).toEqual(3000)
  })
  it('calculates the balance', function() {
    expect(transaction.currentBalance).toEqual(3000)
  })
})
