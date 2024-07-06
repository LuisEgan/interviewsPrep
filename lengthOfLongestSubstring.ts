// * https://leetcode.com/problems/longest-substring-without-repeating-characters/

function lengthOfLongestSubstring(s: string): number {
  let unique = "";
  let i = 0;
  let j = 1;
  let longestStr = 0;

  for (i = 0; i < s.length; i++) {
    unique = s.substring(i, j);

    for (; j <= s.length; j++) {
      if (unique.includes(s[j])) {
        longestStr = longestStr > j - i ? longestStr : j - i;
        if (s[i] != s[j]) {
          i = s.substring(0, j).lastIndexOf(s[j]);
        }
        j++;
        break;
      }
      if (!s[j]) {
        longestStr = longestStr > j - i ? longestStr : j - i;
        break;
      }
      unique += s[j];
    }

    if (!s[j]) {
      break;
    }
  }

  return longestStr;
}
