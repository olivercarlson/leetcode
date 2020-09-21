// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

/**
 * @param {number} numRows
 * @return {number[][]}
 */

const generate = (numRows) => {
	if (numRows === 0) return [];
	let y = 1,
		x = 0;

	let arr = [[1]];

	while (y < numRows) {
		console.log(`x is ${x} and y is ${y}`);
		if (!arr[y]) {
			arr[y] = [];
		}

		if (!arr[y - 1][x - 1]) {
			arr[y][x] = arr[y - 1][x];
		} else if (!arr[y - 1][x]) {
			arr[y][x] = arr[y - 1][x - 1];
		} else {
			arr[y][x] = arr[y - 1][x - 1] + arr[y - 1][x];
		}

		x++;
		if (x - 1 === y) {
			y++;
			x = 0;
		}
	}
	return arr;
};

console.log(generate(5));
