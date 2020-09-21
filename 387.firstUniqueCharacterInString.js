// 387. First Unique Character in a String
// Easy

// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.

/**
 * @param {string} s
 * @return {number}
 */

const firstUniqChar = (s) => {
	const key = {};

	for (let i = 0; i < s.length; i++) {
		if (!key[s[i]]) {
			key[s[i]] = { count: 1, firstIndex: i };
		} else {
			key[s[i]].count++;
		}
	}

	const arr = s.split('');
	return arr.reduce((acc, curr, i) => {
		if (key[curr].count === 1 && acc === -1) return key[curr].firstIndex;
		if (key[curr].count === 1) return acc < key[curr].firstIndex ? acc : key[curr].firstIndex;
		return acc;
	}, -1);
};

// console.log(firstUniqChar('leetcode')); // index = 0
console.log(firstUniqChar('loveleetcode')); // index = 2

// console.log(`curr is ${curr} and verdict is ${key[curr].count === 1}`);
// console.log(`acc is ${acc}`);
