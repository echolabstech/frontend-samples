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

// find the palindrome in a simple string
const containsPalindrome = "i love mom"

// find the longest palindrome
const palindromeString = "i love mom and dad, but not the racecar"
