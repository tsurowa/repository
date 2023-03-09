(function () {
Array.prototype.last = function() {
    return this[this.length - 1];
};
Array.prototype.skip = function(n) {
    let result = [];
    for(let i = n; i < this.length; i++) {
        result.push(this[i]);
    }
    return result;
};
Array.prototype.take = function(n) {
    let result = [];
    for(let i = 0; i < n; i++) {
        result.push(this[i]);
    }
    return result;
};
Array.prototype.sum = function() {
    let sum = 0;
    for(let i = 0; i < this.length; i++) {
        sum += this[i];
    }
    return sum;
};
Array.prototype.average = function() {
    let sum = 0;
    let avg = 0;
    for(let i = 0; i < this.length; i++) {
        sum += this[i];
    }
    avg = sum / this.length;
    return avg;
};
})()

const arr = [1, 2, 3, 4, 5];
console.log(arr.last());
console.log(arr.skip(2));
console.log(arr.take(2));
console.log(arr.sum());
console.log(arr.average());
