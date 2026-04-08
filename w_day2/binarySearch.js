let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 10;

let left = 0;
let right = arr.length - 1;

const binarySearch = (arr, target) => {
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            return -1;
        }
    }
};

console.log(binarySearch(arr, target));