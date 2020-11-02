/* Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:
Input: 121
Output: true

Example 2:
Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

*/

// -121 false (121- != -121)
// 10  false (01 != 10)
// 121 true (121 == 121)

// cannot use .length (type Number) => cannot use array methods
//

const isPalindrome = (x) => {
	const reverseStr = x.toString().split('').reverse().join('');
	if (Number(reverseStr) === x) {
		return true;
	}
	return false;
};
console.log(isPalindrome(-121)); // returns false
console.log(isPalindrome(10)); // returns false
console.log(isPalindrome(121)); // returns true
