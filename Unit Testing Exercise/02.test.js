const isOddOrEven = require('./02');
const { assert } = require('chai');

describe('isOddOrEven function tests', () => {
  it('Return undefined if input is a number', () => {
    assert.equal(isOddOrEven(9), undefined);
  });
  it('Return undefined if input is a null', () => {
    assert.equal(isOddOrEven(null), undefined);
  });
  it('Return undefined if input is an undefined', () => {
    assert.equal(isOddOrEven(undefined), undefined);
  });
  it('Return undefined if input is an object', () => {
    assert.equal(isOddOrEven({}), undefined);
  });
  it('Return undefined if input is an array', () => {
    assert.equal(isOddOrEven([]), undefined);
  });
  it('Return even if strings length is even', () => {
    assert.equal(isOddOrEven('test'), 'even');
  });
  it('Return odd if strings length is odd', () => {
    assert.equal(isOddOrEven('flowers'), 'odd');
  });
})