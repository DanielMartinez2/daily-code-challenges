import parseRomanNumeral from "../roman_numeral_parser.js";

describe("Roman Numeral Parser", () => {

  // --------------------------------
  // Casos oficiais do exercício
  // --------------------------------

  test.each([
    ["III", 3],
    ["IV", 4],
    ["XXVI", 26],
    ["XCIX", 99],
    ["CDLX", 460],
    ["DIV", 504],
    ["MMXXV", 2025],
  ])(
    'parseRomanNumeral("%s") should return %i',
    (numeral, expected) => {
      expect(parseRomanNumeral(numeral)).toBe(expected);
    }
  );


  // --------------------------------
  // Casos de borda
  // --------------------------------

  test.each([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ])(
    'handles a single Roman numeral symbol: "%s"',
    (numeral, expected) => {
      expect(parseRomanNumeral(numeral)).toBe(expected);
    }
  );


  test("handles only additive notation", () => {
    expect(parseRomanNumeral("VIII")).toBe(8);
  });


  test("handles multiple subtractive transitions", () => {
    expect(parseRomanNumeral("MCMXCIV")).toBe(1994);
  });


  test("handles repeated symbols", () => {
    expect(parseRomanNumeral("XXX")).toBe(30);
  });


  test("handles an empty string", () => {
    expect(parseRomanNumeral("")).toBe(0);
  });


  // --------------------------------
  // Entradas inválidas: tipo
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
      expect(() => parseRomanNumeral(invalidInput))
        .toThrow(TypeError);
    }
  );


  // --------------------------------
  // Entradas inválidas: símbolos
  // --------------------------------

  test.each([
    ["A"],
    ["MXA"],
    ["X!"],
    ["123"],
    ["iv"],
    [" "],
  ])(
    'throws Error for invalid Roman numeral symbols in "%s"',
    (invalidInput) => {
      expect(() => parseRomanNumeral(invalidInput))
        .toThrow(Error);
    }
  );

});