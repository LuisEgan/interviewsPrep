const quicksort = (array) => {
  if (!array?.length || array.length === 1) return array;

  let pivot = array.length - 1;
  let swapIndex = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[pivot]) continue;

    const currentValue = array[i];
    array[i] = array[swapIndex];
    array[swapIndex] = currentValue;
    swapIndex++;
  }

  const left = array.slice(0, swapIndex - 1);
  const right = array.slice(swapIndex - 1);
  const resLeft = quicksort(left);
  const resRight = quicksort(right);

  return [...resLeft, ...resRight];
};

// const res = quicksort([2, -7, -2, -2, 0, -10, 3, 1, 6, 10, 5, 4]);
const res = quicksort([4, 3, 2, 1]);
console.log("res: ", res);
