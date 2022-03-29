/**
 * 1. Multiply two numbers without using * operator.
 */
export function multiply(a: number, b: number): number {
  if (a === 0 || b === 0) return 0;

  const {
    multiplicand,
    multiplier,
  }: {
    multiplicand: number;
    multiplier: number;
  } = parseMultiplicationData(a, b);

  let product: number = 0;

  for (let i = 0; i < multiplier; i++) {
    product += multiplicand;
  }

  return isMultiplicationNegative(a, b) ? -product : product;
}

function parseMultiplicationData(
  a: number,
  b: number
): {
  multiplicand: number;
  multiplier: number;
} {
  return a > b
    ? { multiplicand: Math.abs(a), multiplier: Math.abs(b) }
    : { multiplicand: Math.abs(b), multiplier: Math.abs(a) };
}

function isMultiplicationNegative(a: number, b: number): boolean {
  return (a > 0 && b < 0) || (a < 0 && b > 0);
}

/**
 * 2. Find the biggest value in only one iteration.
 */
export function findBiggest(values: number[]): number {
  return values.reduce((acc: number, value: number) =>
    acc > value ? acc : value
  );
}

/**
 * 3. Remove all null, undefined, false and 0 values in only one iteration.
 */
export function cleanFalsyValues(values: any[]): any[] {
  return values.filter((value: any) => !!value);
}

/**
 * 4. Flat all arrays one level.
 */
export function flattenValues(values: any[]): any[] {
  return values.flat();
}

/**
 * 5. Find the most repeated words.
 */
export function findMostRepeatedWords(text: string): Object {
  const wordsCount = countWords(text);

  const sortedWordsCount: [string, number][] = Object.entries(wordsCount).sort(
    ([, countA], [, countB]) => countB - countA
  );

  const maxCount: number = sortedWordsCount[0][1];

  return Object.fromEntries(
    sortedWordsCount.filter((wordCount) => wordCount[1] >= maxCount)
  );
}

export function countWords(text: string): Object {
  return text
    .toLowerCase()
    .split(/[\s,.]/gm)
    .filter((word) => !!word)
    .reduce((dict: Record<string, number>, word: string) => {
      if (dict[word]) dict[word]++;
      else dict[word] = 1;

      return dict;
    }, {});
}

/**
 * 6. Check if a string is a palindrome.
 */
export function isPalindrome(value: string): boolean {
  const normalizedValue: string = value
    .toLowerCase()
    .trim()
    .replace(/[\s,.'!?]/gm, '');

  const reversed: string = normalizedValue
    .split('')
    .reverse()
    .join('');

  return normalizedValue === reversed;
}
