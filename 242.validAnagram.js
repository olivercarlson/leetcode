// Given two strings s and t , write a function to determine if t is an anagram of s.

// You may assume the string contains only lowercase alphabets.
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isAnagram = (s, t) => {
	if (s.length !== t.length) return false;
	let s1 = s.split('').sort();
	let s2 = t.split('').sort();

	for (let i = 0; i < s.length; i++) {
		if (s1[i] !== s2[i]) {
			return false;
		}
	}

	return true;
};
//

console.log(isAnagram('rat', 'car')); // false
console.log(isAnagram('rat', 'tar')); // true
console.log(isAnagram('anagram', 'nagaram')); // true;
