let arr = [65,14,31,28,78,92,82];


let binary = (arr, element, start, end) => {

    let mid = Math.floor((start + end) / 2);

    if (start > end) {
        return false;
    }

    if (arr[mid] === element) {
        return true;
    }

    if (arr[mid] > element) {
        return binary(arr, element, start, mid - 1);
    }
    else {
        return binary(arr, element, mid + 1, end);
    }
}

let result = binary(arr, 28, 0, arr.length);
console.log(result);