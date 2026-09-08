import buildAcronym from "../acronym_builder.js";

describe("Acronym Builder", () => {

  // --------------------------------
  // Casos oficiais do exercício
  // --------------------------------

  test.each([
    [
      "Search Engine Optimization",
      "SEO"
    ],
    [
      "Frequently Asked Questions",
      "FAQ"
    ],
    [
      "National Aeronautics and Space Administration",
      "NASA"
    ],
    [
      "Federal Bureau of Investigation",
      "FBI"
    ],
    [
      "For your information",
      "FYI"
    ],
    [
      "By the way",
      "BTW"
    ],
    [
      "An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily",
      "AUHWPOTIMSH"
    ],
  ])(
    'buildAcronym("%s") should return "%s"',
    (input, expected) => {
      expect(buildAcronym(input)).toBe(expected);
    }
  );


  // --------------------------------
  // Palavras ignoradas
  // --------------------------------

  test.each([
    ["A trip around the world", "ATATW"],
    ["For the people", "FTP"],
    ["An apple a day", "AAD"],
    ["By my side", "BMS"],
    ["Of mice and men", "OMM"],
  ])(
    "includes an ignored word when it is the first word",
    (input, expected) => {
      expect(buildAcronym(input)).toBe(expected);
    }
  );


  test.each([
    ["War of the Worlds", "WTW"],
    ["Research and Development", "RD"],
    ["Written by John Smith", "WJS"],
    ["Guide for Beginners", "GB"],
    ["This is a test", "TIT"],
  ])(
    "ignores specified words when they are not first",
    (input, expected) => {
      expect(buildAcronym(input)).toBe(expected);
    }
  );


  // --------------------------------
  // Espaços múltiplos
  // --------------------------------

  test("handles multiple spaces between words", () => {
    expect(
      buildAcronym("Search   Engine   Optimization")
    ).toBe("SEO");
  });


  test("handles leading and trailing spaces", () => {
    expect(
      buildAcronym("   Search Engine Optimization   ")
    ).toBe("SEO");
  });


  test("handles multiple spaces around ignored words", () => {
    expect(
      buildAcronym("Research   and   Development")
    ).toBe("RD");
  });


  // --------------------------------
  // String de uma palavra
  // --------------------------------

  test("handles a single word", () => {
    expect(
      buildAcronym("NASA")
    ).toBe("N");
  });


  test("handles a single lowercase word", () => {
    expect(
      buildAcronym("computer")
    ).toBe("C");
  });


  test("includes a single ignored word because it is first", () => {
    expect(
      buildAcronym("and")
    ).toBe("A");
  });


  // --------------------------------
  // Casos de borda
  // --------------------------------

  test("handles an empty string", () => {
    expect(buildAcronym("")).toBe("");
  });


  test("handles a string containing only spaces", () => {
    expect(buildAcronym("     ")).toBe("");
  });


  test("ignores word casing when checking ignored words", () => {
    expect(
      buildAcronym("Research AND Development")
    ).toBe("RD");
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
  ])(
    "throws TypeError for non-string input %p",
    (invalidInput) => {
      expect(() => {
        buildAcronym(invalidInput);
      }).toThrow(TypeError);
    }
  );

});