let prizeCounter = {
	phonepocket: [4, 4],
	pen: [4, 4],
	wipes: [4, 4],
	notes: [4, 4],
	carcharger: [50, 50],
	phonecharger: [25, 25],
	lipbalm: [25, 25],
	card: [25, 25],
}

console.log(prizeCounter);

let keys = prizeCounter.keys();
for (i=0; i < 2500; i++) {
	prizeCounter[keys[i]]
}

console.log(prizeCounter['phonepocket']);