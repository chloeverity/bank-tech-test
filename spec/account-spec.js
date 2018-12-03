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
    expect(account.history[0].date).toEqual(jasmine.any(Date))
  })

  it("adds the amount to the history", function() {
    expect(account.history[0].value).toEqual(10)
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
    expect(account.history[0].date).toEqual(jasmine.any(Date))
  })

  it("adds the amount to the history", function() {
    expect(account.history[1].value).toEqual(10)
  })
});


//   describe("when song has been paused", function() {
//     beforeEach(function() {
//       player.play(song);
//       player.pause();
//     });
//
//     it("should indicate that the song is currently paused", function() {
//       expect(player.isPlaying).toBeFalsy();
//
//       // demonstrates use of 'not' with a custom matcher
//       expect(player).not.toBePlaying(song);
//     });
//
//     it("should be possible to resume", function() {
//       player.resume();
//       expect(player.isPlaying).toBeTruthy();
//       expect(player.currentlyPlayingSong).toEqual(song);
//     });
//   });
//
//   // demonstrates use of spies to intercept and test method calls
//   it("tells the current song if the user has made it a favorite", function() {
//     spyOn(song, 'persistFavoriteStatus');
//
//     player.play(song);
//     player.makeFavorite();
//
//     expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
//   });
//
//   //demonstrates use of expected exceptions
//   describe("#resume", function() {
//     it("should throw an exception if song is already playing", function() {
//       player.play(song);
//
//       expect(function() {
//         player.resume();
//       }).toThrowError("song is already playing");
//     });
//   });
// });
