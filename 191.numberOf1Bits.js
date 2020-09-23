/**
 * @param {number} n - a positive integer
 * @return {number}
 */

// TC: O(n) SC: O(1)
const hammingWeight = (n) => {
	return n
		.toString(2)
		.split('')
		.filter((el) => el === '1').length;
};

// >90% speed
// TC: O(n) SC: O(1)
const hammingWeight = (n) => {
	let str = n.toString(2);
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === '1') count++;
	}
	return count;
};

// console.log(hammingWeight(00000000000000000000000000001011)); // 3
// console.log(hammingWeight(00000000000000000000000010000000)); // 1
console.log(hammingWeight(11111111111111111111111111111101)); // 31
