function SumOfNumbers (n, m) {
    let a = Number(n);
    let b = Number(m);
    let sum = 0;
        for(let i = a; i <= b; i++) {
            sum += i;
        }
    console.log(sum);
}

SumOfNumbers('1', '5');
SumOfNumbers('-8', '20');