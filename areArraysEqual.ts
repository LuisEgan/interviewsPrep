// Given two arrays A and B of length N, determine if there is a way to make A equal to B by reversing any subarrays from array B any number of times.

function areTheyEqual(array_a, array_b) {
  // Write your code here

  function areTheyExact(arr1, arr2) {
    return arr1.every((n, i) => n === arr2[i]);
  }
  function reverseInnerArr(arr, fromIndex, toIndex) {
    return [
      ...arr.slice(0, fromIndex),
      ...arr.slice(fromIndex, toIndex + 1).reverse(),
      ...arr.slice(toIndex + 1, arr.length - 1),
    ];
  }

  let indexOnArrayB;
  let newArrB = [...array_b];
  for (let i = 0; i < array_a.length; i++) {
    indexOnArrayB = newArrB.indexOf(array_a[i], i);

    if (indexOnArrayB === -1) {
      return false;
      break;
    }

    if (indexOnArrayB === i) continue;

    newArrB = reverseInnerArr(array_b, i, indexOnArrayB);
  }

  return areTheyExact(array_a, newArrB);
}
