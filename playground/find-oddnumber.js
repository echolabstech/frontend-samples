function oddNumbers(l, r) {
	const range = [];
	for (index = Math.abs(l - r); index >= 0; index--) {
		if (index % 2 === 1) {
			range.push(l + index);
		}
	}
	return range;
}

const result = oddNumbers(2, 5);
console.log(result);