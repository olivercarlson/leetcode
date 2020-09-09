/**
 * @param {string} s
 * @return {string}
 */

// Works, but TLE (Time Limit Exceeded) -- TC: O(n^2)
// const longestPalindrome = (s) => {
// 	if (s.length <= 1) {
// 		return s;
// 	}

// 	let arr = s.split('');
// 	let longest = 0;
// 	let begI = 0;
// 	let endI = 0;

// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = 0; j < arr.length; j++) {
// 			if (
// 				arr
// 					.slice(i, 1 + j)
// 					.reverse()
// 					.join('') === arr.slice(i, 1 + j).join('') &&
// 				arr.slice(i, 1 + j).length > longest
// 			) {
// 				begI = i;
// 				endI = j;
// 				longest = j - i + 1;
// 			}
// 		}
// 	}
// 	return arr.slice(begI, 1 + endI).join('');
// };

const longestPalindrome = (s) => {
	let max = '';
	for (let i = 0; i < s.length; i++) {
		for (let j = 0; j < 2; j++) {
			let left = i;
			let right = i + j;
			console.log(`left is ${s[left]} right is ${s[right]}`);
			while (s[left] && s[left] === s[right]) {
				left--;
				right++;
			}
			if (right - left - 1 > max.length) {
				max = s.substring(left + 1, right);
			}
		}
	}
	return max;
};

console.log('output ' + longestPalindrome('babad')); // returns "bab" [0, 2]
console.log('output ' + longestPalindrome('cbbd')); // returns "bb" or [1,2]
// console.log('output ' + longestPalindrome('bb')); // returns "bb" or [1,2]
// console.log('output ' + longestPalindrome('ccc')); // returns "ccc" or [1,2]
