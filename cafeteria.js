function getMaxAdditionalDinersCount(N, K, M, S) {
  S.sort((a, b) => a - b);

  let availableTotal = 0;

  // Check space before the first diner
  availableTotal += Math.floor((S[0] - 1) / (K + 1));

  // Check spaces between diners
  for (let i = 1; i < M; i++) {
    availableTotal += Math.floor((S[i] - S[i - 1] - 1 - K) / (K + 1));
  }

  // Check space after the last diner
  availableTotal += Math.floor((N - S[M - 1]) / (K + 1));

  return availableTotal;

  //   // * Create a set from the taken seats and available counter
  //   const taken = new Set(S); // O(S)

  //   let availableTotal = 0; // O(1)

  //   // * O(2K = K)
  //   const isDistanceCorrect = (seat, side) => {
  //     for (let i = 0; i <= K; i++) {
  //       if (taken.has(side === "left" ? seat - i : seat + i)) {
  //         return false;
  //       }
  //     }
  //     return true;
  //   };

  //   // * Loop from the first seated person to the left
  //   // * O(4K * N / 2K = 2KN = KN)
  //   for (let i = S[0]; i > 0; i -= K + 1) {
  //     if (isDistanceCorrect(i, "left") && isDistanceCorrect(i, "right")) {
  //       availableTotal++;
  //     }
  //   }

  //   // * Loop from the first seated person to the right
  //   // * O(4K * N / 2K = 2KN = KN)
  //   for (let i = S[0]; i <= N; i += K + 1) {
  //     if (isDistanceCorrect(i, "left") && isDistanceCorrect(i, "right")) {
  //       availableTotal++;
  //     }
  //   }

  //   // * O(S + K + KN = S + KN)
  //   return availableTotal;
}

// const res = getMaxAdditionalDinersCount(15, 2, 3, [11, 6, 14]);
const res = getMaxAdditionalDinersCount(10, 1, 2, [2, 6]);
console.log("res: ", res);
