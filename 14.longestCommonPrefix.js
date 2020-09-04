/* Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Note:All given inputs are in lowercase letters a-z.

NOTE: ONLY prefixes.

UNCLEAR: if arr.length === 3;
*/

/**
 * @param {string[]} strs
 * @return {string}
 */

/* 
RESULTS:
Runtime: 72 ms, **faster than 94.03%** of JavaScript online submissions for Longest Common Prefix.
Memory Usage: 36.9 MB, **less than 77.03%** of JavaScript online submissions for Longest Common Prefix.
*/

const longestCommonPrefix = (strs) => {
	if (!strs || strs.length === 0) {
		return '';
	}
	let prefix = strs[0].substr(0);
	let len = prefix.length;
	let arr = strs.slice(1);
	let i = 0;

	while (i < arr.length) {
		if (len === 0) {
			return '';
		}
		if (arr[i].substr(0, len) !== prefix) {
			len--;
			prefix = strs[0].substr(0, len);
		} else if (arr[i].substr(0, len) === prefix) {
			i++;
		}
	}
	return prefix;
};

console.log(longestCommonPrefix(['dog', 'racecar', 'car'])); // returns ""
console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // returns "fl"
