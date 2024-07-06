// * Hard mode:
// * 1 ≤ N ≤ 300,000
function getArtisticPhotographCountHard(N, C, X, Y) {
  let counter = 0;
  const aIndexes = [];

  for (i = 0; i < N; i++) {
    if (C[i] === "A") aIndexes.push(i);
  }

  let leftNode = { P: 0, B: 0 };
  let rightNode = { P: 0, B: 0 };
  for (let a = 0; a < aIndexes.length || 0; a++) {
    for (let i = X; i <= Y; i++) {
      // left values
      leftNode[C[aIndexes[a] - i]] += 1;

      // right values
      rightNode[C[aIndexes[a] + i]] += 1;
    }
    counter += leftNode.P * rightNode.B;
    counter += leftNode.B * rightNode.P;

    leftNode = { P: 0, B: 0 };
    rightNode = { P: 0, B: 0 };
  }

  return counter;
}

// * Easy mode:
// * 1 ≤ N ≤ 200
function getArtisticPhotographCount(N, C, X, Y) {
  // Write your code here
  let counter = 0;
  const indexes = {
    P: [],
    A: [],
    B: [],
  };

  const isAtRightDistance = (i, j) => {
    return Math.abs(i - j) >= X && Math.abs(i - j) <= Y;
  };

  for (i = 0; i < C.length; i++) {
    if (indexes[C[i]]) {
      indexes[C[i]].push(i);
    }
  }

  let isPbeforeA = false;
  console.log("indexes: ", indexes);
  for (let a = 0; a < indexes.A.length || 0; a++) {
    for (let p = 0; p < indexes.P.length || 0; p++) {
      if (!isAtRightDistance(indexes.A[a], indexes.P[p])) {
        continue;
      }

      isPbeforeA = indexes.A[a] - indexes.P[p] > 0;
      for (let b = 0; b < indexes.B.length || 0; b++) {
        if (!isAtRightDistance(indexes.A[a], indexes.B[b])) {
          continue;
        }

        // if p is before a, then b must be after a
        if (isPbeforeA) {
          if (indexes.A[a] - indexes.B[b] < 0) {
            counter++;
          }
        } else {
          // if p is after a, then b must be before a
          if (indexes.A[a] - indexes.B[b] > 0) {
            counter++;
          }
        }
      }
    }
  }

  return counter;
}

// const res = getArtisticPhotographCount(5, "APABA", 1, 2);
// const res = getArtisticPhotographCountHard(5, "PPBABPBPABPAB", 1, 3);
const res = getArtisticPhotographCountHard(8, ".PBAAP.B", 1, 3);
console.log("res: ", res);
