function missingNumber(nums) {
    const n = nums.length;

    // Sum of numbers from 0 to n
    const total = (n * (n + 1)) / 2;

    // Sum of numbers in the array
    let sum = 0;

    for (let num of nums) {
        sum += num;
    }

    return total - sum;
}
console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1]));    // 2