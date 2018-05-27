function findNumber(arr, k) {
    if (arr.length < 1 || arr.length > 10**5) {
        return 'NO';
    }
    const result = arr.find((element, index, array) => {
        if (element >= 1 && element <= 10**9) {
            if (element === k) {
                return true;
            }
        }
    });
    return (result) ? 'YES' : 'NO';
}

let result = findNumber([3,2,3,1,5], 1)
console.log(result === 'YES');

result = findNumber([5,1,2,3,4,5,1], 5)
console.log(result === 'YES');
