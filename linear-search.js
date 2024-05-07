let arr = [65,14,31,28,78,92,82];
let element = 28;
let flag = false;

for (let i = 0; i < arr.length; i++) {
    if (element === arr[i]) {
        console.log("Element Founded");
        flag = true;
        break;
    }
}

if (!flag) {
    console.log("Element Not Founded");
}