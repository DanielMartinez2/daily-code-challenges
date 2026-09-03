import isPangram from "../pangram.js";

describe("Pangram", () => {

  // --------------------------------
  // Casos oficiais do exercício
  // --------------------------------

  test.each([
    ["hello", "helo", true],
    ["hello", "hel", false],
    ["hello", "helow", false],
    ["hello world", "helowrd", true],
    ["Hello World!", "helowrd", true],
    ["Hello World!", "heliowrd", false],
    ["freeCodeCamp", "frcdmp", false],
    [
      "The quick brown fox jumps over the lazy dog.",
      "abcdefghijklmnopqrstuvwxyz",
      true,
    ],
  ])(
    'isPangram("%s", "%s") should return %s',
    (sentence, letters, expected) => {
      expect(isPangram(sentence, letters)).toBe(expected);
    }
  );


  // --------------------------------
  // Casos de borda
  // --------------------------------

  test("handles repeated letters in the sentence", () => {
    expect(isPangram("aaaaabbbbb", "ab")).toBe(true);
  });


  test("ignores non-alphabetical characters", () => {
    expect(
      isPangram("a1!b2@c3#", "abc")
    ).toBe(true);
  });


  test("ignores letter casing in the sentence", () => {
    expect(
      isPangram("AaBbCc", "abc")
    ).toBe(true);
  });


  test("returns false when sentence contains an extra letter", () => {
    expect(
      isPangram("abcd", "abc")
    ).toBe(false);
  });


  test("returns false when a required letter is missing", () => {
    expect(
      isPangram("abc", "abcd")
    ).toBe(false);
  });


  test("handles a single required letter", () => {
    expect(
      isPangram("aaaaa", "a")
    ).toBe(true);
  });


  test("handles an empty sentence and empty letter set", () => {
    expect(
      isPangram("", "")
    ).toBe(true);
  });


  test("returns false when sentence has no letters but letters are required", () => {
    expect(
      isPangram("123 !@#", "abc")
    ).toBe(false);
  });


  test("ignores spaces and symbols when checking for extra letters", () => {
    expect(
      isPangram("a - b _ c !!!", "abc")
    ).toBe(true);
  });


  // --------------------------------
  // Validação de tipos
  // --------------------------------

  test.each([
    [123, "abc"],
    [null, "abc"],
    [undefined, "abc"],
    [["a", "b", "c"], "abc"],
    [{}, "abc"],
    [true, "abc"],
  ])(
    "throws TypeError when sentence is not a string: %p",
    (sentence, letters) => {
      expect(() => {
        isPangram(sentence, letters);
      }).toThrow(TypeError);
    }
  );


  test.each([
    ["abc", 123],
    ["abc", null],
    ["abc", undefined],
    ["abc", ["a", "b", "c"]],
    ["abc", {}],
    ["abc", false],
  ])(
    "throws TypeError when letters is not a string: %p",
    (sentence, letters) => {
      expect(() => {
        isPangram(sentence, letters);
      }).toThrow(TypeError);
    }
  );

});