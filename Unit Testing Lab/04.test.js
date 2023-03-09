const { expect } = require('chai');
const sum = require('./04');
describe ('Sum of numbers', () => {
 it('Should return sum if argument is an array', () => {
    let numbers = [1, 2, 3, 4];
    let expectedSum = 10;
    let actualSum = sum(numbers);
    expect(expectedSum).to.equal(actualSum);
 });
 it('Should return sum if in array have negative number', () => {
    let numbers = [1, 2, 3, 4, -5];
    let expectedSum = 5;
    let actualSum = sum(numbers);
    expect(expectedSum).to.equal(actualSum);
 });
 it('Should return zero if array is empty', () => {
    let numbers = [];
    let expectedSum = 0;
    let actualSum = sum(numbers);
    expect(expectedSum).to.equal(actualSum);
 });
});
