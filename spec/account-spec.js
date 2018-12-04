
describe("New Account", function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });

  it("should initialize with 0", function() {
    expect(account.currentBalance).toEqual(0);
  });
  it("shows history of transactions", function() {
    expect(account.transactions).toEqual(jasmine.any(Array))
  });
  it("the transacions array is initialized empty", function() {
    expect(account.transactions).toEqual([])
  })
});
describe("Deposit", function() {
  var account;

  beforeEach(function() {
    account = new Account();
    account.deposit(10);
  });

  it("increases balance by given amount", function() {
    expect(account.currentBalance).toEqual(10)
  })

  it("adds the amount to the history", function() {
    expect(account.transactions[0].credit).toEqual(10)
  })
});
describe("Withdraw", function() {
  var account;

  beforeEach(function() {
    account = new Account();
    account.deposit(30)
    account.withdraw(10)
  });

  it("decreases balance by given amount", function() {
    expect(account.currentBalance).toEqual(20)
  })


  it("adds the amount to the history", function() {
    expect(account.transactions[1].debit).toEqual(10)
  })

});
