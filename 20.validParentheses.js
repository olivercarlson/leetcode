/**
 * @param {string} s
 * @return {boolean}
 */

/*

Constraints:
    1 <= s.length <= 104
    s consists of parentheses only '()[]{}'.
 */

const isValid = (s) => {
	let res = '';
	const removeDupes = (str) => {
		res = str.replace('{}', '').replace('()', '').replace('[]', '');
		if (res === '') {
			return true;
		} else if (res.includes('()') || res.includes('{}') || res.includes('[]')) {
			return removeDupes(res);
		} else {
			return false;
		}
	};
	return removeDupes(s);
};

console.log(isValid('{[]}')); // true
console.log(isValid('([)]')); // false
console.log(isValid('(]')); // false
console.log(isValid('()[]{}')); // true
console.log(isValid('()')); // true
