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

const wordWithUniqueLetter = "abbccc";
const wordWithOutUniqueLetter = "bbccc";
const bucket = getLetterBucket(wordWithOutUniqueLetter);
const palindrome = [];

function initializePalindrome(palindrome, bucket) {
	// if unique letters, pick one, center in string, drop the others
	let uniqueLetter;
	Object.entries(bucket).forEach((pair) => {
		const letter = pair[0];
		const count = pair[1];
		if (count === 1) {
			if (!uniqueLetter) {
				uniqueLetter = letter;
			}
			delete bucket[letter];
		}
	});
	if (uniqueLetter) {
		palindrome.push(uniqueLetter);
		return;
	}

	// if no unique letters, pick a letter with odd count, center in string
	Object.entries(bucket).forEach((pair) => {
		const letter = pair[0];
		let count = pair[1];
		if (count % 2 === 1) {
			for (let index = 0; index < count; index++) {
				palindrome.push(letter);
			}
			delete bucket[letter];
			return;
		}
	});
}
initializePalindrome(palindrome, bucket);

function insertLetters(palindrome, bucket) {
	Object.entries(bucket).forEach((pair) => {
		const letter = pair[0];
		let count = pair[1];
		if (count % 2 === 1) {
			count -= 1;
		}
		for (let index = 0; index < count; index += 2) {
			palindrome.push(letter);
			palindrome.splice(0,0,letter);
		}
		delete bucket[letter];
	});
}
insertLetters(palindrome, bucket);
log(bucket);
log(palindrome);
// if no unique letters or odd counts, start iteration early

// calclate space and time complexity

