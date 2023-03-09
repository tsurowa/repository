function AggregateElements(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        let currNum = Number(array[i]);
        sum += currNum;
    }
    console.log(sum);
    sum = 0;
    for (let i = 0; i < array.length; i++) {
        let currNum =Number(array[i]);
        let revNum = 1 / currNum;
        sum += revNum;
    }
    console.log(sum);
    sum = 0;
    let result = '';
    for (let i = 0; i < array.length; i++) {
        let currNum = (array[i]).toString();
        result += currNum;
    }
    console.log(result);
}

AggregateElements([1, 2, 3]); 
AggregateElements([2, 4, 8, 16]);
