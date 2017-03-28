function Stock (symbol, shares){
  this.symbol = symbol;
  this.shares = shares;
  this.exchange = "NYSE"
}
Stock.prototype = {
  buyShares: function(sharesPurchased){
    this.shares = sharesPurchased + this.shares;
  }, 
  sellShares: function(sharesSold){
    this.shares = this.shares - sharesSold;
    if(this.shares<0){
      this.shares=0;
    }
  }, 
  calcValue: function(price){
    return price * this.shares;
  }
} 
var visa = new Stock("V", 100);
visa.buyShares(50);
visa.sellShares(75);
visa.calcValue(50.35);
var apple = new Stock("AAPL", 200);
apple.exchange = "NASDAQ";
console.log(apple);
console.log(visa);