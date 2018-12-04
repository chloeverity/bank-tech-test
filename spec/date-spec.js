
describe('Transaction', function(){

  var transaction;

  beforeEach(function(){
    jasmine.clock().install();
    var date = new Date(2010, 10, 10)
    jasmine.clock().mockDate(date)
    transaction = new Transaction('credit', 10, 10);
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  })

  it('Stores date argument as property', function(){
  expect(transaction.date).toEqual('10/11/2010');
});

});
