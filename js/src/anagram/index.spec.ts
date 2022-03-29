import { areAnagrams, countChars, normalizeAndSplitWord } from ".";

describe("areAnagrams", () => {
  test("should return false when words are not anagrams.", () => {
    const word1: string = "lorem";
    const word2: string = "ipsum";

    const result: boolean = areAnagrams(word1, word2);
    expect(result).toBe(false);
  });

  test("should return true when words are anagrams.", () => {
    const word1: string = "snooze alarms";
    const word2: string = "alas, no more Z's";

    const result: boolean = areAnagrams(word1, word2);
    expect(result).toBe(true);
  });
});

describe("normalizeAndSplitWord", () => {
  test("should convert word to lowercase, remove white spaces and split it by chars.", () => {
    const word: string = "Lorem Ipsum Dolor, Sit's Amet.";
    const expectedValue: string[] = "loremipsumdolorsitsamet".split("");

    const result: string[] = normalizeAndSplitWord(word);
    expect(result).toEqual(expectedValue);
  });
});

describe("countChars", () => {
  test("should return each char of the string and the number of times it repeated.", () => {
    const word: string[] = "lorem".split("");
    const expectedValue: Record<string, number> = {
      l: 1,
      o: 1,
      r: 1,
      e: 1,
      m: 1,
    };

    const result: Record<string, number> = countChars(word);
    expect(result).toEqual(expectedValue);
  });
});
