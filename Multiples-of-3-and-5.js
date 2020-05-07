function multiplesOf3and5(number) {
	// Good luck!
	const multiples = [];
	for (let i = 0; i < number; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			multiples.push(i);
		}
	}
	return multiples.reduce((a, b) => {
		return a + b;
	}, 0);
}

multiplesOf3and5(10);
