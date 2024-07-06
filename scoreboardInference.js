function getMinProblemCount(S) {
  const degradeIntoScores = (number) => {
    if (!number) return [];

    const arrayOfTwos = Array(Math.floor(number / 2)).fill(2);
    return number % 2 === 0 ? arrayOfTwos : [...arrayOfTwos, 1];
  };

  if (!(S || []).length) return 0;

  let maxEven = 0;
  let maxOdd = 0;
  let max = 0;
  let min = 0;
  let res = [];

  S.forEach((score) => {
    if (score % 2 === 0) {
      maxEven = Math.max(maxEven, score);
    } else {
      maxOdd = Math.max(maxOdd, score);
    }
  });

  max = Math.max(maxEven, maxOdd);
  min = Math.min(maxEven, maxOdd);

  res = degradeIntoScores(max);

  if (max % 2 === 0 && !!min) {
    res = [...res, 1];
  }

  return res.length;
}

function generateArrayOfArrays(amountOfArrays, arraysLength) {
  const arrayOfArrays = [];
  for (let i = 0; i < amountOfArrays; i++) {
    const innerArrayLength = Math.floor(Math.random() * arraysLength); // Length of inner array can be between 0 and arraysLength
    const innerArray = [];
    for (let j = 0; j < innerArrayLength; j++) {
      innerArray.push(Math.floor(Math.random() * 1000000)); // Elements between 0 and 1000000000
    }
    arrayOfArrays.push(innerArray);
  }
  return arrayOfArrays;
}

// (() => {
//   const arrays = generateArrayOfArrays(100, 100000);
//   console.log("arrays: ", arrays);

//   arrays.forEach((a) => {
//     getMinProblemCount(a);
//   });
//   console.log("done");
// })();

const res = getMinProblemCount([0]);
console.log("res: ", res);
