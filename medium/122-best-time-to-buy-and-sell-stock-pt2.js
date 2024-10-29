/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let low = prices[0];
    let gain = 0;
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        // 1. Check if increased
        // 1.1 If true, record the difference in gain
        if(prices[i] > prices[i - 1]) {
            gain = prices[i] - low;
        } 
        // 2. Check if decreased
        // 2.1. If true, add gains to 
        else if(prices[i] < prices[i - 1]) {
            low = prices[i];
            profit += gain;
            gain = 0;
        }
    }
    // 3. Return profit plus remaining gain
    return profit += gain;
};

// prices[1] - low = 1, gain = 0, profit = [0]
// prices[2] - low = 1, gain = 5-1 = 4, profit = [0]
// prices[3] - low = 3, gain = 0, profit = [0,4]
// prices[4] - low = 3, gain = 6-3 = 3, profit = [0,4]
// prices[5] - low = 4, gain = 0, profit = [0,4,3]
// prices[6] - low = 4, gain = 5-4 = 1, profit = [0,4,3]
// gain = 1, profit = [0,4,3,1]

