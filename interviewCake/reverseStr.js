// const reverse = (arrayOfChars) => {
// 	// Reverse the input array of characters in place
// 	return arrayOfChars.reverse();
// };

// without cheating:
const reverse = (arrayOfChars) => {
	if (arrayOfChars.length <= 1) return arrayOfChars;

	let temp = '';
	let i = 0;
	while (i < arrayOfChars.length / 2) {
		left = arrayOfChars[i];
		right = arrayOfChars[arrayOfChars.length - (1 + i)];
		temp = left;
		arrayOfChars[i] = right;
		arrayOfChars[arrayOfChars.length - (1 + i)] = temp;
		i++;
	}
	return arrayOfChars;
};

console.log(reverse(['a', 'b', 'c', 'd']));
