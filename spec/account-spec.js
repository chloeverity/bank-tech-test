
describe("New Account", function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });

  it("should initialize with 0", function() {
    expect(account.currentBalance).toEqual(0);
  });
  it("shows history of deposits and withdrawals", function() {
    expect(account.history).toEqual(jasmine.any(Array))
  });
});
describe("Deposit", function() {
  var account;

  beforeEach(function() {
    account = new Account();
    account.deposit(10)
  });



  it("increases balance by given amount", function() {
    expect(account.currentBalance).toEqual(10)
  })

  it("adds the transaction to the history", function() {
    expect(account.history[0].date).toEqual('6/2/2002')
  })

  it("adds the amount to the history", function() {
    expect(account.history[0].credit).toEqual(10)
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

  it("adds the transaction to the history", function() {
    expect(account.history[0].date).toEqual('4/12/2018')
  })

  it("adds the amount to the history", function() {
    expect(account.history[1].debit).toEqual(10)
  })

});
