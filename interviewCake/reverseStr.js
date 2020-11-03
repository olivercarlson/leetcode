// const reverse = (arrayOfChars) => {
// 	// Reverse the input array of characters in place
// 	return arrayOfChars.reverse();
// };

// without cheating:
// const reverse = (arrayOfChars) => {
// 	if (arrayOfChars.length <= 1) return arrayOfChars;

// 	let temp = '';
// 	let i = 0;
// 	while (i < arrayOfChars.length / 2) {
// 		left = arrayOfChars[i];
// 		right = arrayOfChars[arrayOfChars.length - (1 + i)];
// 		temp = left;
// 		arrayOfChars[i] = right;
// 		arrayOfChars[arrayOfChars.length - (1 + i)] = temp;
// 		i++;
// 	}
// 	return arrayOfChars;
// };

// even cleaner syntax:
const reverse = (arrayOfChars) => {
	if (arrayOfChars <= 1) return arrayOfChars;

	let iLeft = 0;
	let iRight = arrayOfChars.length - 1;
	while (iLeft < iRight) {
		let temp = arrayOfChars[iLeft];
		arrayOfChars[iLeft] = arrayOfChars[iRight];
		arrayOfChars[iRight] = temp;
		iLeft++;
		iRight--;
	}
	return arrayOfChars;
};
console.log(reverse(['a', 'b', 'c', 'd']));
