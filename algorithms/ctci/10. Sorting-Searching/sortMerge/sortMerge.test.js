/**
 * Given two sorted arrays A and B, A has enough buffer to store B. Merge the array.
 *
 * Approach
 */

const sortMerge = (a, b) => {
  let counterA = 0;
  let counterB = 0;
  let temp;

  while (counterA < a.length || counterB < b.length) {
    if (temp > counterA)
      if (a[counterA] <= b[counterB]) {
        counterA++;
      } else if (a[counterA] > b[counterB]) {
        temp = a[counterA];
        a[counterA] = b[counterB];
        b[counterB] = temp;
        counterA++;
      }
  }
  return a;
};
