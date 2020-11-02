// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// And then read line by line: "PAHNAPLSIIGYIR"
// Write the code that will take a string and make this conversion given a number of rows:

// Pseudocode It

//     Make an array with the zigzag sequence
//     Make an array with as many strings as we need rows
//     Append the characters to the row strings in zigzag sequence
//     Join the row strings in the array together
// 1. Make an array with the zigzag sequence

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

const convert = (s, numRows) => {
	console.log([...s]);
	// go through s,
	const val1 = [...new Array(5).keys()];
	console.log(`val1 is ${val1}`);
	const zigzag = [...new Array(numRows).keys()];
	console.log(`initial zigzag ${zigzag}`);
	zigzag.push(...zigzag.slice(1, -1).reverse());
	console.log(`post push zigzag ${zigzag}`);
	const rows = new Array(numRows).fill('');
	console.log(rows);
	[...s].forEach((c, i) => (rows[zigzag[i % zigzag.length]] += c));
	return rows.join('');
};
console.log(convert('PAYPALISHIRING', 3)); // returns "PAHNAPLSIIGYIR"
// P   A   H   N
// A P L S I I G
// Y   I   R

// console.log(convert('PAYPALISHIRING', 4)); // returns "PINALSIGYAHRPI"
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

// console.log(convert('PAYPALISHIRING', 5)); // returns "PINALSIGYAHRPI"
// P       H
// A     S I
// Y   I   R
// P L     I G
// A       N
