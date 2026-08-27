import fibonacci from '../fibonacci_sequence';

test('fibonacciSequence returns the correct Fibonacci sequence for a given length', () => {
  expect(fibonacci([0, 1], 10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  expect(fibonacci([2, 3], 5)).toEqual([2, 3, 5, 8, 13]);
} );

// Additional test cases
test('fibonacciSequence returns an empty array for length 0', () => {
  expect(fibonacci([0, 1], 0)).toEqual([]);
}); 
// length < 0 
test('fibonacciSequence throws an error for negative length', () => {
  expect(() => {
    fibonacci([0, 1], -1);
  }).toThrow(TypeError);
});
// should throw if the starting sequence is not an array containing two numbers
test('fibonacciSequence throws an error if the starting sequence is not an array containing two numbers', () => {
  expect(() => {
    fibonacci([0], 5);}).toThrow(TypeError); 
}); 

// should throw error if length is NaN
test('fibonacciSequence throws an error if length is NaN', () => {
  expect(() => {
    fibonacci([0, 1], NaN);
  }).toThrow(TypeError);
});
// should throw error if length is not an integer
test('fibonacciSequence throws an error if length is not an integer', () => {
  expect(() => {
    fibonacci([0, 1], 5.5);
  }).toThrow(TypeError);
});
// should throw error if starting sequence contains non-numeric values
test('fibonacciSequence throws an error if starting sequence contains non-numeric values', () => {
  expect(() => {
    fibonacci([0, 'a'], 5);
  }).toThrow(TypeError);
});
//should throw error if starting sequence contains non-integer values
test('fibonacciSequence throws an error if starting sequence contains non-integer values', () => {
  expect(() => {
    fibonacci([0, 1.5], 5);}).toThrow(TypeError);
});
//should throw error if starting sequence contains more than two numbers
test('fibonacciSequence throws an error if starting sequence contains more than two numbers', () => {
  expect(() => {
    fibonacci([0, 1, 2], 5);
  }).toThrow(TypeError);
});
//throw an error if starting sequence contains NaN or Infinity
test('fibonacciSequence throws an error if starting sequence contains NaN or Infinity', () => {
  expect(() => {
    fibonacci([Infinity, NaN], 5);}).toThrow(TypeError);
});