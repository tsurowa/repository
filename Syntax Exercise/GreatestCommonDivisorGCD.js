function GCD(n1, n2) {
    let divisior = 0;
    for(let i = 1; i <= n1 && i <= n2; i++) {
        if(n1 % i === 0 && n2 % i === 0) {
            divisior = i;
        }
    }
    console.log(divisior);
}

GCD(15, 5);
GCD(2154, 458);