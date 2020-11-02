var fizzBuzz = function (n) {
	let res = Array(n);
	for (let i = 1; i <= n; i++) {
		if (i % 5 === 0 && i % 3 === 0) {
			res[i - 1] = 'FizzBuzz';
		} else if (i % 5 === 0) {
			res[i - 1] = 'Buzz';
		} else if (i % 3 === 0) {
			res[i - 1] = 'Fizz';
		} else {
			res[i - 1] = i.toString();
		}
	}
	return res;
};
