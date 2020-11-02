/**
 * @param {number} x
 * @return {number}
 */

/*Given a 32-bit signed integer, reverse digits of an integer.
Input: 123
Output: 321

Input: -123
Output: -321

Input: 120
Output: 21

Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1]. 
For the purpose of this problem, assume that your function returns 0 when the ***reversed integer*** overflows.
*/

const reverse = (x) => {
	let res = '';
	if (x < 0) {
		res = x.toString().split('').slice(1).reverse().join('');
		res = Number('-' + res);
	} else {
		res = x.toString().split('').reverse().join('');
		res = Number(res);
	}
	if (res <= -2147483648 || res >= 2147483648) {
		return 0;
	}
	return res;
};

console.log(reverse(123)); // returns 321
console.log(reverse(-123)); // returns -321
console.log(reverse(120)); // returns 21
