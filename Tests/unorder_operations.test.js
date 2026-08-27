import evaluate from './Javascript/unorder_operations.js';

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