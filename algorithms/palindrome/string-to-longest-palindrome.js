function log(msg) {
	console.log(msg);
}

function is_palindrome(string) {
	if (string.length == 1) return false;

	let letters = string.split('');
	while(letters.length > 1) {
		if (letters.pop() !== letters.shift()) {
			return false;
		}
	}
	return true;
}
if (is_palindrome("mom") && !is_palindrome("tom") && !is_palindrome("i")) {
	log('is_palindrome() still works');
} else {
	log('uhh ohh, you broke something');
}

function getLetterBucket(word) {
	const letters = {}
	word.split('').forEach((letter) => {
		if (letter in letters) {
			letters[letter] += 1;
		} else {
			letters[letter] = 1;
		}
	});
	return letters;
}
const bucket = getLetterBucket("abbccc");
log(bucket);

// Find the longest palindrome

// calclate space and time complexity

