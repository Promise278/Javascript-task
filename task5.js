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