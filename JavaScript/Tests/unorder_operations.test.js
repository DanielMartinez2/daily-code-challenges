import evaluate from "../unorder_operations.js";

test("should throw if numbers is not an array", () => {
  expect(() => {
    evaluate("1,2,3", ["+"]);
  }).toThrow(TypeError);
});

test("should throw if there are non numbers", () => {
  expect(() => {
    evaluate([1, 2, "3"], ["+"]);
  }).toThrow(TypeError);
});

test("should throw if there are invalid operators", () => {
  expect(() => {
    evaluate([1, 2, 3], ["+", "x"]);
  }).toThrow(TypeError);
});

test("should throw if operators is not an array", () => {
  expect(() => {
    evaluate([1, 2, 3], "+");
  }).toThrow(TypeError);
});

test("should return the only number when the array has one element", () => {
  expect(evaluate([5], ["+"])).toBe(5);
});

test("should not mutate the numbers array", () => {
  const numbers = [5, 6, 7, 8, 9];

  evaluate(numbers, ["+", "-"]);

  expect(numbers).toEqual([5, 6, 7, 8, 9]);
});

test('1) should return 3', () => {
  const numbers = [5, 6, 7, 8, 9];
  const operators = ['+', '-'];

  const expectedOutput = 3;

  expect(
    evaluate(numbers, operators)
  ).toEqual(expectedOutput);
});

test('2) should return 38', () => {
  const numbers = [17, 61, 40, 24, 38, 14];
  const operators = ['+', '%'];

  const expectedOutput = 38;

  expect(
    evaluate(numbers, operators)
  ).toEqual(expectedOutput);
});

test('3) should return 60', () => {
  const numbers = [20, 2, 4, 24, 12, 3];
  const operators = ['*', '/'];

  const expectedOutput = 60;

  expect(
    evaluate(numbers, operators)
  ).toEqual(expectedOutput);
});

test('4) should return 30', () => {
  const numbers = [11, 4, 10, 17, 2];
  const operators = ['*', '*', '%'];

  const expectedOutput = 30;

  expect(
    evaluate(numbers, operators)
  ).toEqual(expectedOutput);
});

test('5) should return -2', () => {
  const numbers = [33, 11, 29, 13];
  const operators = ['/', '-'];

  const expectedOutput = -2;

  expect(
    evaluate(numbers, operators)
  ).toEqual(expectedOutput);
});

test("should evaluate strictly from left to right", () => {
  const numbers = [1, 2, 3];
  const operators = ["+", "*"];

  expect(evaluate(numbers, operators)).toBe(9);
});

test("should repeat operators until all numbers are used", () => {
  const numbers = [10, 2, 3, 4];
  const operators = ["-", "*"];

  expect(evaluate(numbers, operators)).toBe(20);
});

test("should reuse a single operator", () => {
  const numbers = [1, 2, 3, 4];
  const operators = ["+"];

  expect(evaluate(numbers, operators)).toBe(10);
});

test("should handle negative numbers", () => {
  expect(
    evaluate([-10, 5, 2], ["+", "*"])
  ).toBe(-10);
});

test("should handle zero", () => {
  expect(
    evaluate([10, 0, 5], ["+", "-"])
  ).toBe(5);
});