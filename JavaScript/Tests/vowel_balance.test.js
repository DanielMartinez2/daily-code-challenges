import isBalanced from "../vowel_balance.js";

describe("Vowel Balance", () => {

  // Casos fornecidos pelo exercício
  test.each([
    ["racecar", true],
    ["Lorem Ipsum", true],
    ["Kitty Ipsum", false],
    ["string", false],
    [" ", true],
    ["abcdefghijklmnopqrstuvwxyz", false],
    ["123A#b!E&*456-o.U", true],
  ])(
    'isBalanced("%s") should return %s',
    (string, expected) => {
      expect(isBalanced(string)).toBe(expected);
    }
  );


  // Casos de borda

  test("handles an empty string", () => {
    expect(isBalanced("")).toBe(true);
  });


  test("handles a single vowel", () => {
    expect(isBalanced("a")).toBe(true);
  });


  test("handles a single consonant", () => {
    expect(isBalanced("x")).toBe(true);
  });


  test("handles strings without vowels", () => {
    expect(isBalanced("bcdf")).toBe(true);
  });


  test("is case insensitive", () => {
    expect(isBalanced("Axxa")).toBe(true);
  });


  test("ignores the center character in an odd-length string", () => {
    expect(isBalanced("abecx")).toBe(false);
  });


  test("ignores a center vowel in an odd-length string", () => {
    expect(isBalanced("bcaBC")).toBe(true);
  });


  test("handles an even-length string", () => {
    expect(isBalanced("aXXe")).toBe(true);
  });


  test("handles spaces and non-alphabetical characters", () => {
    expect(isBalanced("a1#!1e")).toBe(true);
  });

});