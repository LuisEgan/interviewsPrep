// * https://leetcode.com/problems/valid-palindrome/

function isPalindrome(s: string): boolean {
  const onlyChars = s
    .trim()
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();
  console.log(onlyChars);
  for (let i = 0; i < onlyChars.length / 2; i++) {
    if (onlyChars[i] !== onlyChars[onlyChars.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

const isP = isPalindrome("A man, a plan, a canal: Panama");
