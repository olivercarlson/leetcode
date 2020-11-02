/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

// solution #1: built in method
//  const reverseString = (s) => {
// 	return s.reverse();
// };

// solution #2: recursion (for fun).
const reverseString = (s) => {
	let temp;
	function recurs(left, right) {
		if (left < right) {
			temp = s[left];
			s[left] = s[right];
			s[right] = temp;
			recurs(left + 1, right - 1);
		}
	}
	recurs(0, s.length - 1);
};

console.log(reverseString(['h', 'e', 'l', 'l', 'o'])); // ['o', 'l', 'l', 'e', 'h']
console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h'])); // ["h","a","n","n","a","H"]
