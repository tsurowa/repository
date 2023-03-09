function SumFirstLast(arr) {
    let first = Number(arr[0]);
    let last = Number(arr[arr.length - 1]);
    return first + last;
}

console.log(SumFirstLast(['20', '30', '40']));
console.log(SumFirstLast(['5', '10']));