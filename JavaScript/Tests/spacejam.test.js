import spaceJam from '../spacejam.js';
/*S  P  A  C  E  J  A  M

Given a string, remove all spaces from the string, insert two spaces between every character, convert all alphabetical letters to uppercase, and return the result.

    Non-alphabetical characters should remain unchanged (except for spaces) */

// Test cases for the spaceJam function
test("removes spaces and converts letters to uppercase", () => {
  expect(spaceJam("hello world"))
    .toBe("H  E  L  L  O  W  O  R  L  D");
});

test("handles a string without spaces", () => {
  expect(spaceJam("JavaScript"))
    .toBe("J  A  V  A  S  C  R  I  P  T");
});

test("preserves non-alphabetical characters", () => {
  expect(spaceJam("123 abc!"))
    .toBe("1  2  3  A  B  C  !");
});
//Should throw error if the input is not a string
test("throws error if input is not a string", () => {
  expect(() => spaceJam(123)).toThrow(TypeError);  
});

test("preserves non-alphabetical characters", () => {
  expect(spaceJam("1!2?"))
    .toBe("1  !  2  ?");
});

test("removes all spaces before adding the new spacing", () => {
  expect(spaceJam(" a  b c "))
    .toBe("A  B  C");
});