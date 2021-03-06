// Say you have an array prices for which the ith element is the price of a given stock on day i.
// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).
// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

// Constraints:

//     1 <= prices.length <= 3 * 10 ^ 4
//     0 <= prices[i] <= 10 ^ 4

/**
 * @param {number[]} prices
 * @return {number}
 */

// const maxProfit = (prices) => {
// 	let profit = 0;
// 	for (let i = 0; i < prices.length; i++) {
// 		if (prices[i + 1] > prices[i]) {
// 			profit += prices[i + 1] - prices[i];
// 		}
// 	}
// 	return profit;
// };

const maxProfit = (prices) => {
	return prices.reduce((profit, curr, i, prices) => {
		return prices[i + 1] > prices[i] ? (profit += prices[i + 1] - prices[i]) : profit;
	}, 0);
};

console.log(maxProfit([6, 1, 3, 2, 4, 7])); // 7
// console.log(maxProfit([7, 6, 4, 3, 1])); // 0
// console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 7
//              Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
//              Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3
// console.log(maxProfit([1, 2, 3, 4, 5])); // 4
//              Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
//              Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
//              engaging multiple transactions at the same time. You must sell before buying again.
