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

// put each letter into a bin
const string = "literary";
const buckets = {}
string.split(' ').forEach((word) => {
	word.split('').forEach((letter) => {
		if (letter in buckets) {
			buckets[letter] += 1;
		} else {
			buckets[letter] = 1;
		}
	});
});
log(buckets);

// Find the longest palindrome

// calclate space and time complexity

