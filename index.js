// 1 checking the pallingstring of the length of some words.
// let items = ["bob", "pop", "krop"];

// function checkPallinString(str) {
//     let palindromestring = str.toLowerCase();
//     return palindromestring === palindromestring.split('').reverse().join('');
// }

// items.forEach(item => {
//     if (checkPallinString(item)) {
//         console.log(`${item} is a palindrome.`);
//     } else {
//         console.log(`${item} is not a palindrome.`);
//     }
// });

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
    if (str[left] !== str[right]) {
    return false;
    }
    left++;
    right--;
    }
    return true;
}

console.log(isPalindrome('krop'))

// 2 check the maximum numbers in a array of numbers?

let array = [8, 6, 2, 4, 11, 16, 26, 5, 102]

let max = 0

for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
        max = array[i]
    }
}
console.log("these is the maximum number in the array", max)


// 3 finding the factorial of five [5]

let factory = 5

for (let i = 1; i < 5; i++) {
    factory *= i
}

console.log(`the factory of 5 is = ${factory}`)


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



// 5 count the vowels in a string?

function countVowels(str) {
    let vowels = "aeiou";
    let count = 0;

    let formattedString = str.toLowerCase();

    for (let char of formattedString) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

let vowelCount = countVowels("Emamanuel");
console.log(`The number of vowels is: ${vowelCount}`);


// 6 find the primes numbers

// let primenum = [2, 4, 6, 8];

// function primeNums(number, primenum) {
//     return number * primenum
// }

// console.log(primeNums(2))

// 7 find the multiples of a number?

function multiplyNumber(number, multiplier) {
    return number * multiplier;
}


console.log(multiplyNumber(5, 3));
console.log(multiplyNumber(3,4))



// 8 find the index of an array?

let number = [1, 2, 3, 4, 5, 6];

function findIndexofArr() {
    for (let i = 0; i < number.length; i++) {
        console.log(`These are the number of the array ${number[i]} and these are the index ${i}`)        
    }
}

findIndexofArr();



// 9 merge 2 arrys and sort them?

let input = [0, 1, 4, 8 ]
let output = [2, 3, 5, 6 ]

let result = input.concat(output)
result.sort((a, b) => a- b)

console.log(result)