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

// one liner.
const isAnagram = (s, t) => {
	return [...s].sort().join('') === [...t].sort().join('');
};

// faster solution
const isAnagram = (s, t) => {
	if (s.length !== t.length) return false;

	const s1 = s.split('').sort().join('');
	const s2 = t.split('').sort().join('');
	for (let i = 0; i < s.length; i++) {
		if (s1[i] !== s2[i]) {
			return false;
		}
	}
	return true;
};

// console.log(isAnagram('rat&', '&car')); // false
// console.log(isAnagram('*r&at', 'ta*r&')); // true
// console.log(isAnagram('anagram', 'nagaram')); // true;
console.log(isAnagram('xxconlaelh', 'axncxlhjle')); // false
