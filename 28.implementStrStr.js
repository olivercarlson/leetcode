// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.
// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

// Constraints:
//     haystack and needle consist only of lowercase English characters.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
	return needle === '' ? 0 : haystack.indexOf(needle);
};

console.log(strStr('hello', 'll')); // return 2
console.log(strStr('aaaaa', 'bba')); // return -1
