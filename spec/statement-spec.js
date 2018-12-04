describe("Statement", function() {
  beforeEach(function() {
    statement = new Statement(account = new Account)
  })
  it("should initialize with an account", function() {
    expect(statement.account).toEqual(jasmine.any(Object))
  })
})
