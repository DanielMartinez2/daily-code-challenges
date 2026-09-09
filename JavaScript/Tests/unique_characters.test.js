import allUnique from "../unique_characters.js";

describe("Unique Characters", () => {

  // --------------------------------
  // Casos oficiais do exercício
  // --------------------------------

  test.each([
    ["abc", true],
    ["aA", true],
    ["QwErTy123!@", true],
    ["~!@#$%^&*()_+", true],
    ["hello", false],
    ["freeCodeCamp", false],
    ["!@#*$%^&*()aA", false],
  ])(
    'allUnique("%s") should return %s',
    (input, expected) => {
      expect(allUnique(input)).toBe(expected);
    }
  );


  // --------------------------------
  // Casos de borda
  // --------------------------------

  test("handles an empty string", () => {
    expect(allUnique("")).toBe(true);
  });


  test("handles a single character", () => {
    expect(allUnique("a")).toBe(true);
  });


  test("treats uppercase and lowercase as different characters", () => {
    expect(allUnique("aA")).toBe(true);
  });


  test("detects repeated uppercase characters", () => {
    expect(allUnique("AaA")).toBe(false);
  });


  test("detects repeated lowercase characters", () => {
    expect(allUnique("aba")).toBe(false);
  });


  test("handles a single space as unique", () => {
    expect(allUnique(" ")).toBe(true);
  });


  test("detects repeated spaces", () => {
    expect(allUnique("  ")).toBe(false);
  });


  test("treats spaces as characters", () => {
    expect(allUnique("a b")).toBe(true);
  });


  test("detects a repeated space inside a string", () => {
    expect(allUnique("a  b")).toBe(false);
  });


  test("handles unique digits", () => {
    expect(allUnique("1234567890")).toBe(true);
  });


  test("detects repeated digits", () => {
    expect(allUnique("123451")).toBe(false);
  });


  test("handles unique symbols", () => {
    expect(allUnique("!@#$%^&*")).toBe(true);
  });


  test("detects repeated symbols", () => {
    expect(allUnique("!@#$!")).toBe(false);
  });


  test("handles mixed character types", () => {
    expect(allUnique("aB3! z")).toBe(true);
  });


  // --------------------------------
  // Entradas inválidas
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
    [["a", "b", "c"]],
  ])(
    "throws TypeError for non-string input %p",
    (invalidInput) => {
      expect(() => {
        allUnique(invalidInput);
      }).toThrow("Input must be a string");
    }
  );

});