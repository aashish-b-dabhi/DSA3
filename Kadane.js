let arr = [-25, -34, 40, -61, -28, 10, 59, -2]
let current = arr[0];
let max = arr[0]

let start = 0;
let end = 0;
let tempS = 0

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > current + arr[i]) {
        temp = i;
        current = arr[i]
    }
    else {
        current = current + arr[i]
    }

    if (current > max) {
        max = current;
        start = temp;
        end = i
    }
}

console.log("Sum = ",max);