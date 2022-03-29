import {
  cleanFalsyValues,
  countWords,
  findBiggest,
  findMostRepeatedWords,
  flattenValues,
  isPalindrome,
  multiply,
} from ".";

describe("multiply", () => {
  test("should return 0 when at least one factor is 0", () => {
    const expectedValue: number = 0;
    const result: number = multiply(0, 1);
    expect(result).toBe(expectedValue);
  });

  test("should return 6 when multiplicand is 2 and multiplier is 3", () => {
    const expectedValue: number = 6;
    const result: number = multiply(2, 3);
    expect(result).toBe(expectedValue);
  });

  test("should return positive value when both factors have the same sign", () => {
    const result: number = multiply(-2, -3);
    expect(result).toBeGreaterThan(0);
  });

  test("should return negative value when both factors have different sign", () => {
    const result: number = multiply(-2, 3);
    expect(result).toBeLessThan(0);
  });
});

describe("findBiggest", () => {
  test("should return the biggest value", () => {
    const mockValues: number[] = [1, 4, 2, 5, 23, 7];
    const expectedValue = 23;
    const result = findBiggest(mockValues);
    expect(result).toBe(expectedValue);
  });
});

describe("cleanFalsyValues", () => {
  test("should remove all null, undefined, false and 0 values", () => {
    const mockValues: any[] = [1, undefined, 2, 0, null, 7, false, 9];
    const expectedValue = [1, 2, 7, 9];
    const result = cleanFalsyValues(mockValues);
    expect(result).toEqual(expectedValue);
  });
});

describe("flattenValues", () => {
  test("should remove all null, undefined, false and 0 values", () => {
    const mockValues: any[] = [
      [1, 2, 3],
      [4, [5, 6], 7],
      [[8, [9, 10], 11], 12, 13],
    ];
    const expectedValue = [1, 2, 3, 4, [5, 6], 7, [8, [9, 10], 11], 12, 13];
    const result = flattenValues(mockValues);
    expect(result).toEqual(expectedValue);
  });
});

describe("findMostRepeatedWords", () => {
  test("should return most repeated words", () => {
    const mockValues: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem IPSUM";
    const expectedValue = {
      'lorem': 2,
      'ipsum': 2
    };
    const result = findMostRepeatedWords(mockValues);
    expect(result).toEqual(expectedValue);
  });
});

describe("countWords", () => {
  test("should return each word and the number of times is repeated", () => {
    const mockValues: string = "Lorem ipsum dolor sit amet, lorem IPSUM";
    const expectedValue = {
      'lorem': 2,
      'ipsum': 2,
      'dolor': 1,
      'sit': 1,
      'amet': 1,
    };
    const result = countWords(mockValues);
    expect(result).toEqual(expectedValue);
  });
});

describe("isPalindrome", () => {
  test("should return the most repeated words", () => {
    const mockText1: string = "lewd did I live & evil I did dwel";
    const mockText2: string = "Madam, I'm Adam";
    const mockText3: string = "A man, a plan, a canal, Panama!";
    const mockText4: string = "Not a palindrome";

    expect(isPalindrome(mockText1)).toBe(true);
    expect(isPalindrome(mockText2)).toBe(true);
    expect(isPalindrome(mockText3)).toBe(true);
    expect(isPalindrome(mockText4)).toBe(false);
  });
});
