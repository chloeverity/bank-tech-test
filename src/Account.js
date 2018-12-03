function Account() {
  this.currentBalance = 0;
  this.history = []
}

Account.prototype.deposit = function(amount) {
  this.currentBalance += amount
  this.history.push({date : new Date, value : amount})
};
Account.prototype.withdraw = function (amount) {
  this.currentBalance -= amount
  this.history.push({date : new Date, value : amount})
};
Account.prototype.printStatement = function () {
  return this.history
};

// Player.prototype.pause = function() {
//   this.isPlaying = false;
// };
//
// Player.prototype.resume = function() {
//   if (this.isPlaying) {
//     throw new Error("song is already playing");
//   }
//
//   this.isPlaying = true;
// };
//
// Player.prototype.makeFavorite = function() {
//   this.currentlyPlayingSong.persistFavoriteStatus(true);
// };
