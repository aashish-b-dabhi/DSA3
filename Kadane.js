let arr = [-25, -34, 40, -61, -28, 10, 59, -2]
let current = arr[0];
let max = arr[0]

for (let i = 0; i < arr.length; i++) {
    current = current + arr[i]
    if (current < 0) {
        current = 0
    }

    if (current > max) {
        max = current;
    }
}

console.log("Sum = ", max);