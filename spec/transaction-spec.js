describe("Transactions", function() {
  var transaction;

  beforeEach(function() {
    jasmine.clock().install();
    var date = new Date(2010, 10, 10)
    jasmine.clock().mockDate(date)
    transaction = new Transaction("credit", 3000, 3000);
  })
  
  afterEach(function() {
    jasmine.clock().uninstall();
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
