let atLeastOneNonUniqueLetterInBucket = false;
const palindrome = [];
const bucket = {};
const testWords = ['test', 'abbccc', 'bbccc', 'eccaabb', 'gfdebbbaaaccc', 'abc', 'heavy', 'bbbbbcccaaa', 'bbbbbcccaaaaa', 'bbbbbaaccc'];
const testWord = testWords[0];

atLeastOneNonUniqueLetterInBucket = getLetterBucket(bucket, testWord);
if (atLeastOneNonUniqueLetterInBucket) {
	const pushedUniqueLetter = mayPushOneUniqueLetter(palindrome, bucket);
	if (!pushedUniqueLetter) {
		mayPushOneOddCountLetter(palindrome, bucket);
	}
	insertLetters(palindrome, bucket);

	const word = palindrome.join('');
	const is_palindrome = isPalindrome(word);
	log(`${testWord} as a palindrome: ${word}`);
} else {
	log(`${testWord} is NOT a palindrome.`);
}

log(`isPalindrome() complexity: space is O(n) and time is O(n/2) - pop and shift reduce array size by half`);
log(`getLetterBucket() complexity: space is O(n) and time is O(n)`);
log(`mayPushOneUniqueLetter() complexity: space is O(n) and time is O(n)`);
log(`mayPushOneOddCountLetter() complexity: space is O(n) and time is O(n+p) - iterate on pairs of letters + at most itearte on 1 count of letters`);
log(`insertLetters() complexity: space is O(n) and time is O(n*p) - itearte on pairs of letters X itearte on count of letters`);

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
	const pairs = Object.entries(bucket);
	let index = pairs.length -1;
	while (index > 0) {
		const letter = pairs[index][0];
		let count = pairs[index][1];
		if (count % 2 === 1) {
			for (let index = 0; index < count; index++) {
				palindrome.push(letter);
			}
			delete bucket[letter];
			return;
		}
		index -= 1;
	}
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
