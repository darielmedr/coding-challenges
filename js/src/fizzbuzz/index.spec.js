const { printFizzBuzz, getFizzBuzzValue } = require('.');

describe("printFizzBuzz", () => {
    test("should print FizzBuzz up to 16.", () => {
        const expectedValue = [0, 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8,  'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16];
        const length = 16;
        const result = printFizzBuzz(length);

        expect(result).toEqual(expectedValue);
     });
});

describe("getFizzBuzzValue", () => {
    test("should print 0 when value is 0.", () => {
        const value = 0;
        const expectedValue = 0;
        const result = getFizzBuzzValue(value);

        expect(result).toEqual(expectedValue);
     });

     test("should print 'Fizz' when value is 3.", () => {
        const value = 3;
        const expectedValue = 'Fizz';
        const result = getFizzBuzzValue(value);

        expect(result).toEqual(expectedValue);
     });

     test("should print 'Fizz' when value is multiple of 3 but not 5.", () => {
        const value = 6;
        const expectedValue = 'Fizz';
        const result = getFizzBuzzValue(value);

        expect(result).toEqual(expectedValue);
     });

     test("should print 'Buzz' when value is 5.", () => {
        const value = 5;
        const expectedValue = 'Buzz';
        const result = getFizzBuzzValue(value);

        expect(result).toEqual(expectedValue);
     });

     test("should print 'Buzz' when value is multiple of 5 but not 3.", () => {
        const value = 10;
        const expectedValue = 'Buzz';
        const result = getFizzBuzzValue(value);

        expect(result).toEqual(expectedValue);
     });

     test("should print 'FizzBuzz' when value is multiple of 3 and 5.", () => {
        const value = 15;
        const expectedValue = 'FizzBuzz';
        const result = getFizzBuzzValue(value);

        expect(result).toEqual(expectedValue);
     });

     test("should print the value when is not multiple of 3 or 5.", () => {
        const value = 2;
        const expectedValue = 2;
        const result = getFizzBuzzValue(value);

        expect(result).toEqual(expectedValue);
     });
});
