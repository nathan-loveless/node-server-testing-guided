const calc = require('../calculator');

describe('add', () => {
    it('adds 2 numbers', () => {
        /* Can do it this way
        let valA = 2;
        let valB = 2;
    
        let expectedResult = 4;
        let result = calc.add(valA, valB);
        expect(result).toBe(expectedResult);
        */
    
        expect(calc.add(2,2)).toBe(4);
        expect(calc.add(3, 1)).toBe(4);
    })

    it('subtracts 2 numbers', () => { expect(calc.subtract(2,2)).toBe(0); })
})

describe('multiple', () => {
    it('multiplies 2 numbers', () => { expect(calc.multiply(2,2)).toBe(4); });
    it('divides 2 numbers', () => { expect(calc.divide(2,2)).toBe(1); });
})





