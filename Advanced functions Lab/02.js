function solution (num) {
    let result = function sum (n) {
        return num + n;
    }
    return result;
}



let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));