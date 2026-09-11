import reverseSentence from "../reversed_sentence.js";

describe("Reverse Sentence", () => {

  // --------------------------------
  // Casos oficiais do exercício
  // --------------------------------

  test.each([
    [
      "world hello",
      "hello world",
    ],
    [
      "push commit git",
      "git commit push",
    ],
    [
      "npm  install  sudo",
      "sudo install npm",
    ],
    [
      "import    default   function  export",
      "export function default import",
    ],
  ])(
    'reverseSentence("%s") should return "%s"',
    (input, expected) => {
      expect(reverseSentence(input)).toBe(expected);
    }
  );


  // --------------------------------
  // Casos de borda
  // --------------------------------

  test("handles a single word", () => {
    expect(
      reverseSentence("hello")
    ).toBe("hello");
  });


  test("handles an empty string", () => {
    expect(
      reverseSentence("")
    ).toBe("");
  });


  test("handles a string containing only spaces", () => {
    expect(
      reverseSentence("     ")
    ).toBe("");
  });


  test("removes leading and trailing spaces", () => {
    expect(
      reverseSentence("   hello world   ")
    ).toBe("world hello");
  });


  test("normalizes multiple spaces between words", () => {
    expect(
      reverseSentence("one     two   three")
    ).toBe("three two one");
  });


  test("handles uppercase and lowercase without changing them", () => {
    expect(
      reverseSentence("Hello WORLD JavaScript")
    ).toBe("JavaScript WORLD Hello");
  });


  test("preserves punctuation attached to words", () => {
    expect(
      reverseSentence("hello, world!")
    ).toBe("world! hello,");
  });


  test("handles numbers as words", () => {
    expect(
      reverseSentence("one 2 three 4")
    ).toBe("4 three 2 one");
  });


  // --------------------------------
  // Validação de input
  // --------------------------------

  test.each([
    [123],
    [3.14],
    [null],
    [undefined],
    [true],
    [false],
    [[]],
    [{}],
  ])(
    "throws TypeError for non-string input %p",
    (invalidInput) => {
      expect(() => {
        reverseSentence(invalidInput);
      }).toThrow(TypeError);
    }
  );

});