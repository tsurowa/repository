const { assert } = require('chai');
const rgbToHexColor = require('./06');

describe('rgbToHexColor function tests', () => {
    it('Should return undefined if first parameter is a string', () => {
        assert.equal(rgbToHexColor('test', 2, 3), undefined);
    });
    it('Should return undefined if first parameter is a null', () => {
        assert.equal(rgbToHexColor(null, 2, 3), undefined);
    });
    it('Should return undefined if first parameter is an undefined', () => {
        assert.equal(rgbToHexColor(undefined, 2, 3), undefined);
    });
    it('Should return undefined if first parameter is an object', () => {
        assert.equal(rgbToHexColor({}, 2, 3), undefined);
    });
    it('Should return undefined if first parameter is an array', () => {
        assert.equal(rgbToHexColor([], 2, 3), undefined);
    });
    it('Should return undefined if first parameter is less than 0', () => {
        assert.equal(rgbToHexColor(-5, 2, 3), undefined);
    });
    it('Should return undefined if first parameter is more than 255', () => {
        assert.equal(rgbToHexColor(350, 2, 3), undefined);
    });

    it('Should return undefined if second parameter is a string', () => {
        assert.equal(rgbToHexColor(2, 'test', 3), undefined);
    });
    it('Should return undefined if second parameter is a null', () => {
        assert.equal(rgbToHexColor(2, null, 3), undefined);
    });
    it('Should return undefined if second parameter is an undefined', () => {
        assert.equal(rgbToHexColor(2, undefined, 3), undefined);
    });
    it('Should return undefined if second parameter is an object', () => {
        assert.equal(rgbToHexColor(2, {}, 3), undefined);
    });
    it('Should return undefined if second parameter is an array', () => {
        assert.equal(rgbToHexColor(2, [], 3), undefined);
    });
    it('Should return undefined if second parameter is less than 0', () => {
        assert.equal(rgbToHexColor(2, -5, 3), undefined);
    });
    it('Should return undefined if second parameter is more than 255', () => {
        assert.equal(rgbToHexColor(2, 350, 3), undefined);
    });

    it('Should return undefined if third parameter is a string', () => {
        assert.equal(rgbToHexColor(2, 3, 'test'), undefined);
    });
    it('Should return undefined if third parameter is a null', () => {
        assert.equal(rgbToHexColor(2, 3, null), undefined);
    });
    it('Should return undefined if third parameter is an undefined', () => {
        assert.equal(rgbToHexColor(2, 3, undefined), undefined);
    });
    it('Should return undefined if third parameter is an object', () => {
        assert.equal(rgbToHexColor(2, 3, {}), undefined);
    });
    it('Should return undefined if third parameter is an array', () => {
        assert.equal(rgbToHexColor(2, 3, []), undefined);
    });
    it('Should return undefined if third parameter is less than 0', () => {
        assert.equal(rgbToHexColor(2, 3, -5), undefined);
    });
    it('Should return undefined if third parameter is more than 255', () => {
        assert.equal(rgbToHexColor(2, 3, 350), undefined);
    });

    it('Should return the same color in hexadecimal format as a string', () => {
        assert.equal(rgbToHexColor(10, 100, 28), '#0A641C');
    });
    it('Red value is 0', () => {
        assert.equal(rgbToHexColor(0, 10, 250), '#000AFA');
    });
    it('Red value is 255', () => {
        assert.equal(rgbToHexColor(255, 10, 250), '#FF0AFA');
    });
})