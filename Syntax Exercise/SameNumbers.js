function SameNumbers(num) {
    let sum = 0;
    let string = num.toString();
    let isSame = true;
    let firstLetter = string[0]
    for (let i = 0; i < string.length; i++) {
        if (firstLetter !== string[i]) {
            isSame = false;
        }
        sum += Number(string[i]); 
    }
    console.log(isSame);
    console.log(sum);
}

SameNumbers(2222222);
SameNumbers(1234);