function NegativePositiveNumbers(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            result.unshift(arr[i]);
        } else {
            result.push(arr[i]);
        }
    }
    for (let element of result) {
        console.log(element);
    }
}

NegativePositiveNumbers([7, -2, 8, 9]);
NegativePositiveNumbers([3, -2, 0, -1]);