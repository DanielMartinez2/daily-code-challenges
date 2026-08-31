import jbelmu from "../jbelmud_text.js";

describe("Jbelmu", () => {

  test("normal case", () => {
    expect(jbelmu("hello world"))
      .toBe("hello wlord");
  });


  test.each([
    [["alfa"]],
    [123],
    [null],
    [undefined],
    [{}],
    [true],
  ])(
    "throws TypeError for invalid input %p",
    (invalidInput) => {
      expect(() => jbelmu(invalidInput))
        .toThrow(TypeError);
    }
  );


  // Casos fornecidos pelo exercício
  test.each([
    [
      "i love jumbled text",
      "i love jbelmud text"
    ],
    [
      "freecodecamp is my favorite place to learn to code",
      "faccdeeemorp is my faiortve pacle to laern to cdoe"
    ],
    [
      "the quick brown fox jumps over the lazy dog",
      "the qciuk borwn fox jmpus oevr the lazy dog"
    ],
  ])(
    'jbelmu("%s") should return "%s"',
    (text, expected) => {
      expect(jbelmu(text)).toBe(expected);
    }
  );


  // Casos de borda

  test("handles an empty string", () => {
    expect(jbelmu("")).toBe("");
  });


  test("keeps a one-letter word unchanged", () => {
    expect(jbelmu("a")).toBe("a");
  });


  test("keeps a two-letter word unchanged", () => {
    expect(jbelmu("to")).toBe("to");
  });


  test("keeps first and last letters in their original positions", () => {
    expect(jbelmu("dcba")).toBe("dbca");
  });


  test("handles a three-letter word", () => {
    expect(jbelmu("cat")).toBe("cat");
  });


  test("handles words whose middle letters are already sorted", () => {
    expect(jbelmu("abcde")).toBe("abcde");
  });


  test("handles repeated letters", () => {
    expect(jbelmu("banana")).toBe("baanna");
  });


  test("handles several short words", () => {
    expect(jbelmu("i am to be"))
      .toBe("i am to be");
  });

});