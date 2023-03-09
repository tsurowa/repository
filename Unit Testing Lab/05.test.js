const isSymmetric = require("./05");
const { assert, expect } = require("chai");

describe("isSymetric tests", () => {
  it("Should return false if input is string", () => {
    assert.equal(isSymmetric("test"), false);
  });
  it("Should return false if input is number", () => {
    assert.equal(isSymmetric(5), false);
  });
  it("Should return false if input is undefined", () => {
    assert.equal(isSymmetric(undefined), false);
  });
  it("Should return true if array is symetric", () => {
    assert.equal(isSymmetric([1, 2, 2, 1]), true);
  });
  it("Should return false if array is not symetric", () => {
    assert.equal(isSymmetric([1, 2, 3, 4]), false);
  });
  it("Should return true if input is a symetric string-array", () => {
    let arr = ['a', 'b', 'b', 'a'];
    expect(isSymmetric(arr)).to.be.true;
  });
  it('Should return false if array.length is odd', () => {
    let arr = [1, 2, 2];
    expect(isSymmetric(arr)).to.be.false;
  });
  it('Should return false if in array has more than one type data', () => {
    let arr = [1, 2, '1'];
    expect(isSymmetric(arr)).to.be.false;
  });
});
