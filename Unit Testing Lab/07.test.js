const { expect } = require('chai');
const createCalculator = require('./07');

describe('createCalculator function tests', () => {
    let calc = null;
    beforeEach(() => {
        calc = createCalculator();
    });
    it('Return zero initial value', () => {
        expect(calc.get()).to.equal(0);
    });
    it('Add numbers', () => {
        calc.add(1);
        expect(calc.get()).to.equal(1);
    });
    it('Add more numbers', () => {
        calc.add(1);
        calc.add(2);
        expect(calc.get()).to.equal(3);
    });
    it('Subtract numbers', () => {
        calc.subtract(1);
        expect(calc.get()).to.equal(-1);
    });
    it('Subtract more numbers', () => {
        calc.add(-1);
        calc.add(-2);
        expect(calc.get()).to.equal(-3);
    });
    it('Add numbers as a string', () => {
        calc.add('1');
        expect(calc.get()).to.equal(1);
    });
    it('Subtract numbers as a string', () => {
        calc.subtract('1');
        expect(calc.get()).to.equal(-1);
    });
})