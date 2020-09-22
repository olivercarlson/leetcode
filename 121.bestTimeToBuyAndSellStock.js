// Say you have an array for which the ith element is the price of a given stock on day i.
// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
// Note that you cannot sell a stock before you buy one.

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.

// Example 2:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

/**
 * @param {number[]} prices
 * @return {number}
 */

// TC O(n^2) SC O(1)
// const maxProfit = (prices) => {
// 	let max = 0;
// 	for (let i = 0; i < prices.length; i++) {
// 		for (let j = i + 1; j < prices.length; j++) {
// 			max = prices[j] - prices[i] > max ? prices[j] - prices[i] : max;
// 		}
// 	}
// 	return max;
// };

const maxProfit = (prices) => {
	let prevLow;

	return prices.reduce((max, curr, i) => {
		console.log(`prevLow is ${prevLow} and curr is ${curr}`);
		if (prevLow === undefined || prevLow >= curr) prevLow = curr;
		if (prevLow < curr && curr - prevLow > max) {
			max = curr - prevLow;
		}
		return max;
	}, 0);
};

// console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
// console.log(maxProfit([7, 6, 4, 3, 1])); // 0
console.log(maxProfit([2, 1, 2, 1, 0, 1, 2])); // 2
