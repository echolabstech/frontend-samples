function log(msg) {
	console.log(msg);
}

// first identify a palindrome
const samplePalindrome = "mom".split('');
let match = false;
let index = 0;
while(samplePalindrome.length > 1 && index <= samplePalindrome.length) {
	if (samplePalindrome.pop() === samplePalindrome.shift()) {
		match = true;
	} else {
		match = false;
		break;
	}
}

// identify not a palindrome
const notPalindrome = "tom"

// find the palindrome in a simple string
const containsPalindrome = "i love mom"

// find the longest palindrome
const palindromeString = "i love mom and dad, but not the racecar"
