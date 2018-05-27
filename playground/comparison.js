// Complete the solve function below.
function solve(alice, bob) {
    const scores = [0, 0];
    alice.forEach((aliceValue, index) => {
        const bobValue = bob[index];
        if (aliceValue >= 1 && aliceValue <= 100) {
            if (bobValue >= 1 && bobValue <= 100) {
                if (aliceValue > bobValue) {
                    scores[0] += 1
                } else if (bobValue > aliceValue) {
                    scores[1] += 1
                }
            }
        }
    });
    return scores;
}

const result = solve([5, 6, 7], [3, 6, 10]);
console.log(result);
