
describe('Transaction', function(){

  var transaction;

  beforeEach(function(){
    jasmine.clock().install();
    transaction = new Transaction('credit', 10, 10);
  });

  it('Stores date argument as property', function(){
  expect(transaction.date).toEqual('10/10/10');
});

});
