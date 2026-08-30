/*Array Duplicates

Given an array of integers, return an array of integers that appear more than once in the initial array, sorted in ascending order. If no values appear more than once, return an empty array.

    Only include one instance of each value in the returned array.

findDuplicates([1, 2, 3, 4, 5]) should return [].
findDuplicates([1, 2, 3, 4, 1, 2]) should return [1, 2].
findDuplicates([2, 34, 0, 1, -6, 23, 5, 3, 2, 5, 67, -6, 23, 2, 43, 2, 12, 0, 2, 4, 4]) should return [-6, 0, 2, 4, 5, 23].
 */

function findDuplicates(arr) {
  const traversed = new Set();
  const duplicates = new Set();

  arr.forEach((elem) => {
    if (traversed.has(elem)) {
      duplicates.add(elem);
    }

    traversed.add(elem);
  });

  return [...duplicates].sort((a, b) => a - b);
};

export default findDuplicates;