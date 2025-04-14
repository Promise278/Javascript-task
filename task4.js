// 4 find the sum of numbers

let numbers = [2, 4, 6, 8, 10];

function sumofNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

let totalSum = sumofNumbers(numbers);
console.log(totalSum);