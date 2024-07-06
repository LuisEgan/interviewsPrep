// * https://leetcode.com/problems/is-subsequence/

function isSubsequence(s: string, t: string): boolean {
  let prevIndex = -1;
  let index = -1;
  for (let i = 0; i < s.length; i++) {
    index = t.indexOf(s[i], prevIndex + 1);
    if (index === -1 || index < prevIndex) {
      return false;
    }
    prevIndex = index;
  }
  return true;
}
