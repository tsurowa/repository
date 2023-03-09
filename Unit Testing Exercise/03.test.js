const { assert } = require('chai');
const lookupChar = require('./03');

describe('lookupChar function tests', () => {
    it('Return undefined if first parameter is a number', () => {
        assert.equal(lookupChar(5, 5), undefined)
    });
    it('Return undefined if first parameter is a null', () => {
        assert.equal(lookupChar(null, 5), undefined)
    });
    it('Return undefined if first parameter is an undefined', () => {
        assert.equal(lookupChar(undefined, 5), undefined)
    });
    it('Return undefined if first parameter is an object', () => {
        assert.equal(lookupChar({}, 5), undefined)
    });
    it('Return undefined if first parameter is an array', () => {
        assert.equal(lookupChar([], 5), undefined)
    });
    it('Return undefined if second parameter is a string', () => {
        assert.equal(lookupChar('test', 'double'), undefined);
    });
    it('Return undefined if second parameter is a null', () => {
        assert.equal(lookupChar('test', null), undefined);
    });
    it('Return undefined if second parameter is an undefined', () => {
        assert.equal(lookupChar('test', undefined), undefined);
    });
    it('Return undefined if second parameter is an object', () => {
        assert.equal(lookupChar('test', {}), undefined);
    });
    it('Return undefined if second parameter is an array', () => {
        assert.equal(lookupChar('test', []), undefined);
    });
    it('Return incorrect index if second parameter is less than 0', () => {
        assert.equal(lookupChar('test', -3), 'Incorrect index');
    });
    it('Return incorrect index if second parameter is more than strings length', () => {
        assert.equal(lookupChar('test', 6), 'Incorrect index');
    });
    it('Return correct answer', () => {
        assert.equal(lookupChar('test', 1), 'e');
    });
    it('Return incorrect index if the string is empty', () => {
        assert.equal(lookupChar('', 2), 'Incorrect index');
    });
    it('Return undefined with two wrong parameters', () => {
        assert.equal(lookupChar({}, null), undefined);
    });
    it('Return undefined if the index is decimal number', () => {
        assert.equal(lookupChar('test', 2.5), undefined);
    });
})