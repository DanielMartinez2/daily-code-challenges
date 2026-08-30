import findDuplicates from "../array_duplicates.js";

test("returns an empty array when there are no duplicates", () => {
  expect(
    findDuplicates([1, 2, 3, 4, 5])
  ).toEqual([]);
});

test("returns duplicated values only once", () => {
  expect(
    findDuplicates([1, 2, 3, 4, 1, 2])
  ).toEqual([1, 2]);
});

test("returns duplicated values sorted in ascending order", () => {
  expect(
    findDuplicates([
      2, 34, 0, 1, -6, 23, 5, 3, 2, 5,
      67, -6, 23, 2, 43, 2, 12, 0, 2, 4, 4
    ])
  ).toEqual([-6, 0, 2, 4, 5, 23]);
});


test("handles an empty array", () => {
  expect(findDuplicates([])).toEqual([]);
});

test("includes a value only once even if it appears many times", () => {
  expect(
    findDuplicates([3, 3, 3, 3, 3])
  ).toEqual([3]);
});

test("sorts negative and positive duplicates numerically", () => {
  expect(
    findDuplicates([5, -2, 10, 5, -2, 10])
  ).toEqual([-2, 5, 10]);
});

test("does not mutate the original array", () => {
  const arr = [3, 1, 3, 2, 1];
  const original = [...arr];

  findDuplicates(arr);

  expect(arr).toEqual(original);
});