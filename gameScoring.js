function gameScoring(score) {
  const results = [];

  function backtrack(currentScore, combination) {
    if (currentScore === 0) {
      results.push([...combination]);
      return;
    }

    if (currentScore < 0) {
      return;
    }

    // Try adding 1, 2, and 3 points
    for (let points of [1, 2, 3]) {
      combination.push(points);
      backtrack(currentScore - points, combination);
      combination.pop(); // Backtrack
    }
  }

  const closingTags = new Set(["}", ")", "]"]);

  backtrack(score, []);
  return results;
}

const res = gameScoring(5);
