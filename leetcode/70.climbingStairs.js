// You are climbing a stair case. It takes n steps to reach to the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Constraints: 1 <= n <= 45

/**
 * @param {number} n
 * @return {number}
 */

const climbStairs = (n) => {
	const memo = {};
	const cS = (num) => {
		if (!memo[num]) {
			const res = num < 2 ? 1 : cS(num - 2) + cS(num - 1);
			memo[num] = res;
		}
		return memo[num];
	};
	return cS(n);
};

// console.log(climbStairs(2)); // 2
// console.log(climbStairs(3)); // 3
console.log(climbStairs(10)); //
