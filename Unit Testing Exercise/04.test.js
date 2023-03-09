const { assert } = require('chai');
const mathEnforcer = require('./04');

describe('mathEnforcer function tests', () => {
    describe('addFive function tests', () => {
        it('Return undefined if input is a string', () => {
            assert.equal(mathEnforcer.addFive('test'), undefined);
        });
        it('Return undefined if input is a null', () => {
            assert.equal(mathEnforcer.addFive(null), undefined);
        });
        it('Return undefined if input is an undefined', () => {
            assert.equal(mathEnforcer.addFive(undefined), undefined);
        });
        it('Return undefined if input is an object', () => {
            assert.equal(mathEnforcer.addFive({}), undefined);
        });
        it('Return undefined if input is an array', () => {
            assert.equal(mathEnforcer.addFive([]), undefined);
        });
        it('Return result if input is a number', () => {
            assert.equal(mathEnforcer.addFive(5), 10)
        });
        it('Return result if input is a decimal number', () => {
            assert.equal(mathEnforcer.addFive(5.5), 10.5)
        });
        it('Return result if input is a negative number', () => {
            assert.equal(mathEnforcer.addFive(-5), 0)
        });

    });
    describe('subtractTen function tests', () => {
        it('Return undefined if input is a string', () => {
            assert.equal(mathEnforcer.subtractTen('test'), undefined);
        });
        it('Return undefined if input is a null', () => {
            assert.equal(mathEnforcer.subtractTen(null), undefined);
        });
        it('Return undefined if input is an undefined', () => {
            assert.equal(mathEnforcer.subtractTen(undefined), undefined);
        });
        it('Return undefined if input is an object', () => {
            assert.equal(mathEnforcer.subtractTen({}), undefined);
        });
        it('Return undefined if input is an array', () => {
            assert.equal(mathEnforcer.subtractTen([]), undefined);
        });
        it('Return result if input is a number', () => {
            assert.equal(mathEnforcer.subtractTen(15), 5)
        });
        it('Return result if input is a decimal number', () => {
            assert.equal(mathEnforcer.subtractTen(15.5), 5.5)
        });
        it('Return result if input is a negative number', () => {
            assert.equal(mathEnforcer.subtractTen(-10), -20)
        });
    });
    describe('sum function tests', () => {
        it('Return undefined if first parameter is a string', () => {
            assert.equal(mathEnforcer.sum('test', 5), undefined);
        });
        it('Return undefined if first parameter is a null', () => {
            assert.equal(mathEnforcer.sum(null, 5), undefined);
        });
        it('Return undefined if first parameter is an undefined', () => {
            assert.equal(mathEnforcer.sum(undefined, 5), undefined);
        });
        it('Return undefined if first parameter is an object', () => {
            assert.equal(mathEnforcer.sum({}, 5), undefined);
        });
        it('Return undefined if first parameter is an array', () => {
            assert.equal(mathEnforcer.sum([], 5), undefined);
        });
        it('Return undefined if second parameter is a string', () => {
            assert.equal(mathEnforcer.sum(5, 'test'), undefined);
        });
        it('Return undefined if second parameter is a null', () => {
            assert.equal(mathEnforcer.sum(5, null), undefined);
        });
        it('Return undefined if second parameter is an undefined', () => {
            assert.equal(mathEnforcer.sum(5, undefined), undefined);
        });
        it('Return undefined if second parameter is an object', () => {
            assert.equal(mathEnforcer.sum(5, {}), undefined);
        });
        it('Return undefined if second parameter is an array', () => {
            assert.equal(mathEnforcer.sum(5, []), undefined);
        });
        it('Return sum of two numbers', () => {
            assert.equal(mathEnforcer.sum(5, 5), 10);
        });
        it('Return sum of two negative numbers', () => {
            assert.equal(mathEnforcer.sum(-5, -5), -10);
        });
        it('Return sum of two decimal numbers', () => {
            assert.equal(mathEnforcer.sum(5.5, 5.5), 11);
        });
        it('Return sum if one of the numbers is negative', () => {
            assert.equal(mathEnforcer.sum(5, -5), 0);
        });
        it('Return sum if one of the numbers is decimal', () => {
            assert.equal(mathEnforcer.sum(5, 5.5), 10.5);
        });
    })
})