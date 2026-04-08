let arr1 = [1, 3, 5, 7, 9]
let arr2 = [2, 4, 6, 8, 10]

let i = 0;
let j = 0
let k = 0

let result = new Array(arr1.length + arr2.length)


while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]){
        result[k] = arr1[i]
        i++
    }
    else {
        result[k] = arr2[j]
        j++
    }
    k++
}

while (i < arr1.length) {
    result[k] = arr1[i]
    i++
    k++
}

while (j < arr2.length) {
    result[k] = arr2[j]
    j++
    k++
}
console.log(result)