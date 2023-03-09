function sumTable() {
    let rowElements = document.querySelectorAll('tr td:nth-of-type(2)');
    let arr = Array.from(rowElements);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let currNum = arr[i].textContent;
        sum += Number(currNum);
    }
    let sumElement = document.getElementById('sum');
    sumElement.textContent = sum;
}
