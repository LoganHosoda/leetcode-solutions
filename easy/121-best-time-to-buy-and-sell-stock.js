/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let low = prices[0];
    let gain = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < low) low = prices[i]
        else if (prices[i] - low > gain) gain = prices[i] - low;
    }
    return gain;
};

