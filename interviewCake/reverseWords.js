// Decode the message by reversing the words:
// brute force:
const reverseWords = (arrayOfChars) => {
	if (arrayOfChars <= 1) return arrayOfChars;
	const arrayOfWords = arrayOfChars.join('').split(' ');
	let indexLeft = 0,
		indexRight = arrayOfWords.length - 1;
	while (indexLeft < indexRight) {
		console.log(`${arrayOfWords[indexLeft]} ${arrayOfWords[indexRight]}`);
		let temp = arrayOfWords[indexLeft];
		arrayOfWords[indexLeft] = arrayOfWords[indexRight];
		arrayOfWords[indexRight] = temp;
		indexLeft++;
		indexRight--;
	}
	return arrayOfWords;
};

// O(1) space AKA In place swap:
const reverseWords = (arrayOfChars) => {
	return arrayOfChars;
};

const message = ['c', 'a', 'k', 'e', ' ', 'p', 'o', 'u', 'n', 'd', ' ', 's', 't', 'e', 'a', 'l'];
console.log(reverseWords(message).join(' '));
