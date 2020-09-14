// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.

// Input: 3;
// Output: 'III';

// Input: 4;
// Output: 'IV';

// Input: 58;
// Output: 'LVIII';
// Explanation: (L = 50), (V = 5), (III = 3);

//
/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = (num) => {
	const key = {
		1: 'I',
		5: 'V',
		// 9: 'IX',
		10: 'X',
		// 40: 'XL',
		50: 'L',
		// 90: 'XC',
		100: 'C',
		// 400: 'CD',
		500: 'D',
		// 900: 'CM',
		1000: 'M',
	};
	let res = [];
	let str = num.toString();
	let len = str.length; // 1,2,3,4

	// go l > r,
	// calculate place (i / len) = 0 / 3 =
	// push onto array
	for (let i = 0; i < len; i++) {
		// calculate base 10:
		// 10 ** (len - i) // 4 - 1 / 2 / 3 / 4
		let base10 = 10 ** (len - (i + 1)); // 10 ** 3/2/1/0
		console.log(base10);
		// let curPlace = 10 ** (i + 1 / len); // 1,2,3,4
		//
		// switch (str[i]) {
		// 	case 1:
		// 	case 2:
		// 	case 3:
		// 		//
		// 		let symbol = curPlace * 1;
		// 	case 6:
		// 	case 7:
		// 	case 8:
		//
		//
		// 	case 4:
		// 	case 9:
		// 	//
		// }
	}
};
console.log(intToRoman(1994)); // "MCMXCIV"    Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
// console.log(intToRoman(199)); // "MCMXCIV"    Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
// console.log(intToRoman(19)); // "MCMXCIV"    Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
// console.log(intToRoman(1)); // "MCMXCIV"    Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
