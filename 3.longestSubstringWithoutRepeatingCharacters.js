/**
 * @param {string} s
 * @return {number}
 */
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Input: s = ""
// Output: 0

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

//SLOW Bruteforce.
// const lengthOfLongestSubstring = (s) => {
// 	if (s.length === 0) return 0;
// 	if (s.length === 1) return 1;

// 	let res = 0;
// 	let temp = [s[0]];
// 	let i = 0;
// 	let j = 0;

// 	while (i < s.length && j < s.length) {
// 		if (!temp.includes(s[j + 1])) {
// 			res > temp.length ? (res = res) : (res = temp.length);
// 			temp.push(s[j + 1]);
// 			j++;
// 		} else {
// 			res > temp.length ? (res = res) : (res = temp.length);
// 			i++;
// 			j = i;
// 			temp = [s[i]];
// 		}
// 	}
// 	return res;
// };

//convert to sliding window using a set.
const lengthOfLongestSubstring = (s) => {
	if (s.length === 0) return 0;
	if (s.length === 1) return 1;

	let res = 0;
	let i = 0;
	let j = 0;

	// init set, add first letter.
	let set = new Set();
	set.add(s[0]);

	// set up the loop, stop if either i becomes the last letter or j+1 becomes the last letter.
	while (i < s.length && j < s.length - 1) {
		if (!set.has(s[j + 1])) {
			set.add(s[j + 1]);
			res = Math.max(res, set.size);
			j++;
		} else {
			set.delete(s[i]);
			i++;
		}
	}
	return res;
};

console.log(lengthOfLongestSubstring('abcabcd')); // 4
console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('bbbbb')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3
console.log(lengthOfLongestSubstring('')); // 0;
