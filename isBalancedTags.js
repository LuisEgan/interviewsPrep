function isBalanced(s) {
  let balanced = true;

  // tags relationship map
  const openingTagsRelations = {
    "{": "}",
    "(": ")",
    "[": "]",
  };

  const openingTagsStack = [];

  for (let i = 0; i < s.length; i++) {
    if (openingTagsRelations[s[i]]) {
      openingTagsStack.push(s[i]);
    } else {
      const lastOpeningTag = openingTagsStack.pop();

      if (s[i] !== openingTagsRelations[lastOpeningTag]) {
        balanced = false;
        break;
      }
    }
  }

  return balanced;
}

const res = isBalanced("");
console.log('res: ', res);
