function solve(arr) {
    let startNum = 1;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 'add') {
            newArr.push(startNum);
            startNum++;
        } else {
            newArr.pop();
            startNum++;
        }
    }
    if(newArr.length !== 0) {
        console.log(newArr.join("\n"));
    } else {
        console.log('Empty');
    }
}

solve(["add", "add", "add", "add"]);
solve(["add", "add", "remove", "add", "add"]);
solve(["remove", "remove", "remove"]);
