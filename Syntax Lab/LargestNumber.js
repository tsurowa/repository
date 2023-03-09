function LargestNumber(a, b, c) {
    let largest = a;
        if(b > a && b > c) {
            largest = b;
        } else if (c > a && c > b) {
            largest = c;
        }
    console.log(`The largest number is ${largest}.`);
}

LargestNumber(5, -3, 16);
LargestNumber(-3, -5, -22.5);