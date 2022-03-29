/**
 * O(n)
 */
export function areAnagrams(word1: string, word2: string): boolean {
  const normalized1: string[] = normalizeAndSplitWord(word1);
  const normalized2: string[] = normalizeAndSplitWord(word2);

  if (normalized1.length !== normalized2.length) return false;

  const count1: Record<string, number> = countChars(normalized1);

  normalized2.forEach(char => {
      if (!count1[char]) return false;
      if (count1[char] <= 0) return false;

      count1[char]--;
  });

  return !Object.values(count1).some((value: number) => value > 0);
}

/**
 * O(n * log(n))
 */
// export function areAnagrams(word1: string, word2: string): boolean {
//   const normalized1: string[] = normalizeAndSplitWord(word1);
//   const normalized2: string[] = normalizeAndSplitWord(word2);

//   if (normalized1.length !== normalized2.length) return false;

//   const sorted1: string = sortAndJoinWord(normalized1);
//   const sorted2: string = sortAndJoinWord(normalized2);

//   return sorted1 === sorted2;
// }

export function normalizeAndSplitWord(word: string): string[] {
  return word
    .toLowerCase()
    .replace(/[\s,.']/g, "")
    .split("");
}

export function countChars(chars: string[]): Record<string, number> {
  const dict: Record<string, number> = {};

  chars.forEach((char: string) => {
    if (dict[char]) dict[char]++;
    else dict[char] = 1;
  });

  return dict;
}

function sortAndJoinWord(word: string[]): string {
  return word.sort().join("");
}
