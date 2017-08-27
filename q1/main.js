// Q1: Apple Stocks
// source: https://www.interviewcake.com/
// Suppose we could access yesterday's stock prices as an array, where:
  // The indices are the time in minutes past trade opening time, which was 9:30am local time.
  // The values are the price in dollars of Apple stock at that time.
// So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500.

// Write an efficient function that takes stockPricesYesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

// for example:

var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

getMaxProfit(stockPricesYesterday);
// returns 6 (buying for $5 and selling for $11)

// No "shorting"—you must buy before you sell. You may not buy and sell in the same time step (at least 1 minute must pass).

// -------------------------------------------------------------------------

const getMaxProfit = (stockPricesYesterday) => {
  let maxProfit = 0;
  // iterate through every price and time
  for (let earlierTime=0;, earlierTime < stockPriceYesterday.length; earlierTime++) {
    let earlierPrice = stockPriceYesterday[earlierTime];
    // and go through all LATER prices
    for (let laterTime = earlierTime + 1; laterTime < stockPricesYesterday.length; laterTime++) {
      let laterPrice = stockPricesYesterday[laterTime];
      // see what our profit would be if we bought at the min price and sold at current price
      let potentialProfit = laterPrice - earlierPrice;
      // update maxprofit to see if we can do better
      maxProfit = Math.max(maxProfit, potentialProfit);
    }
  }
  return maxProfit;
}
