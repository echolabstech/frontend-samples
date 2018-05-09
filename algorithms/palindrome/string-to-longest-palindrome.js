let isWorthTrying = false;
const palindrome = [];
const bucket = {};
const testWords = ['abbccc', 'bbccc', 'eabccab', 'gfdeabcbbacca', 'abc'];
const testWord = testWords[0];

isWorthTrying = getLetterBucket(bucket, testWord);
if (isWorthTrying) {
	const pushedUniqueLetter = mayPushOneUniqueLetter(palindrome, bucket);
	if (!pushedUniqueLetter) {
		mayPushOneOddCountLetter(palindrome, bucket);
	}
	insertLetters(palindrome, bucket);
	log(bucket);
	log(palindrome);

	const word = palindrome.join('');
	const is_palindrome = isPalindrome(word);
	log(`${testWord} as a palindrome: ${word}`);
} else {
	log(`${testWord} is NOT a palindrome.`);
}

function log(msg) {
	console.log(msg);
}

function isPalindrome(string) {
	if (string.length == 1) return false;

	let letters = string.split('');
	while(letters.length > 1) {
		if (letters.pop() !== letters.shift()) {
			return false;
		}
	}
	return true;
}
if (isPalindrome("mom") && !isPalindrome("tom") && !isPalindrome("i")) {
	log('isPalindrome() still works');
} else {
	log('uhh ohh, you broke something');
}

function getLetterBucket(bucket, word) {
	let isWorthTrying = false;
	word.split('').forEach((letter) => {
		if (letter in bucket) {
			bucket[letter] += 1;
			isWorthTrying = true;
		} else {
			bucket[letter] = 1;
		}
	});
	return isWorthTrying;
}

function mayPushOneUniqueLetter(palindrome, bucket) {
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
		return true;
	}
	return false;
}

function mayPushOneOddCountLetter(palindrome, bucket) {
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

// calclate space and time complexity

