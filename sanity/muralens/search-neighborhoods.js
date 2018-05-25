const FuzzySearch = require('fuzzy-search');

function fuzzySearch(needle, haystack) {
	const searcher = new FuzzySearch(haystack, ['name'], {caseSensitive: false});
	const result = searcher.search(needle);
	console.log(result);
}

// fetchFromLocal((locations) => {fuzzySearch('detroit', locations);});
