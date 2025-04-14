// 2 check the maximum numbers in a array of numbers?

let array = [8, 6, 2, 4, 11, 16, 26, 5, 102]

let max = 0

for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
        max = array[i]
    }
}
console.log("these is the maximum number in the array", max)