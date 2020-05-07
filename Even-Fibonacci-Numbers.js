function fiboEvenSum(n) {
	// You can do it!
	const sequence = [1, 2];

	while (sequence[sequence.length - 1] + sequence[sequence.length - 2] <= n) {
		sequence.push(
			sequence[sequence.length - 1] + sequence[sequence.length - 2]
		);
	}
	return sequence
		.filter((e) => e % 2 === 0)
		.reduce((a, b) => {
			return a + b;
		});
}

fiboEvenSum(4000000);
