function SmallestTwoNumbers(arr) {
    let newArr = arr.sort((a, b) => a - b);
    console.log(newArr[0], newArr[1]);
}

SmallestTwoNumbers([30, 15, 50, 5]);
SmallestTwoNumbers([3, 0, 10, 4, 7, 3]);