/**
 * @param {string} s
 * @return {string}
 */

// const longestPalindrome = (s) => {
// 	if (s.length <= 1) {
// 		return s;
// 	}
// 	// track longest
// 	let beginI = 0;
// 	let endI = 0;
// 	let longest = 0;
// 	let arr = s.split('');
// 	let i = 0;
// 	let j = 1;
// 	while (i < arr.length - 1 && j < arr.length - 1) {
// 		// console.log('begin i ' + beginI);
// 		// console.log('endi ' + endI);
// 		if (
// 			s.substring(i, j + 1).split('') ===
// 			s
// 				.substring(i, j + 1)
// 				.split('')
// 				.reverse()
// 		) {
// 			console.log('begin i ' + beginI);
// 			console.log('endi ' + endI);

// 			if (endI - beginI > j - i) {
// 				longest = endI - beginI;
// 			} else {
// 				endI = j;
// 				beginI = i;
// 				longest = j - i;
// 			}
// 			j++;
// 		} else {
// 			i++;
// 			if (i === j) {
// 				j++;
// 			}
// 		}
// 	}

// 	return s.substring(beginI, endI);
// };

const longestPalindrome = (s) => {
	if (s.length <= 1) {
		return s;
	}
	let arr = s.split('');

	let j = 1;
	let i = 0;
	let longest = 0;
	let endI = 0;
	let beginI = 0;

	while (i < arr.length && j < arr.length) {
		// console.log(arr.slice(i, 1 + j));
		// console.log(arr.slice(i, 1 + j).reverse());

		// console.log(
		// 	arr.slice(i, 1 + j).toString() ===
		// 		arr
		// 			.slice(i, 1 + j)
		// 			.reverse()
		// 			.toString()
		// );
		if (
			arr.slice(i, 1 + j).toString() ===
			arr
				.slice(i, 1 + j)
				.reverse()
				.toString()
		) {
			if (j - i > longest) {
				endI = j;
				beginI = i;
				longest = j - i;
			}
		}
		j++;

		// } else {
		// 	i++;
		// 	if (i === j) {
		// 		j++;
		// 	}
		// }
	}
	return s.substring(beginI, 1 + endI);
};

console.log(longestPalindrome('babad')); // returns "bab" [0, 2]
console.log(longestPalindrome('cbbd')); // returns "bb" or [1,2]
