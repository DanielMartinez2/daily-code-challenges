import generateSlug from "../generate_slug.js";

describe("Slug Generator", () => {

  // --------------------------------
  // Casos oficiais
  // --------------------------------

  test.each([
    [
      "helloWorld",
      "helloworld",
    ],
    [
      "hello world!",
      "hello%20world",
    ],
    [
      " hello-world ",
      "helloworld",
    ],
    [
      "hello  world",
      "hello%20world",
    ],
    [
      "  ?H^3-1*1]0! W[0%R#1]D  ",
      "h3110%20w0r1d",
    ],
  ])(
    'generateSlug("%s") should return "%s"',
    (input, expected) => {
      expect(generateSlug(input)).toBe(expected);
    }
  );


  // --------------------------------
  // Casos de borda
  // --------------------------------

  test("returns an empty string for empty input", () => {
    expect(generateSlug("")).toBe("");
  });


  test("returns an empty string for only spaces", () => {
    expect(generateSlug("     ")).toBe("");
  });


  test("returns an empty string for only punctuation", () => {
    expect(generateSlug("!!!???---")).toBe("");
  });


  test("converts uppercase letters to lowercase", () => {
    expect(
      generateSlug("HELLO WORLD")
    ).toBe("hello%20world");
  });


  test("preserves numbers", () => {
    expect(
      generateSlug("Version 2 Build 123")
    ).toBe("version%202%20build%20123");
  });


  test("removes punctuation between letters", () => {
    expect(
      generateSlug("hello-world_test")
    ).toBe("helloworldtest");
  });


  test("collapses multiple consecutive spaces", () => {
    expect(
      generateSlug("hello     world")
    ).toBe("hello%20world");
  });


  test("removes leading and trailing spaces", () => {
    expect(
      generateSlug("   hello world   ")
    ).toBe("hello%20world");
  });


  test("does not return leading or trailing %20 after punctuation removal", () => {
    expect(
      generateSlug("!!! hello world !!!")
    ).toBe("hello%20world");
  });


  test("handles a single word", () => {
    expect(
      generateSlug("JavaScript")
    ).toBe("javascript");
  });


  test("handles a string containing only numbers", () => {
    expect(
      generateSlug("123456")
    ).toBe("123456");
  });


  test("handles letters and numbers without spaces", () => {
    expect(
      generateSlug("Test123")
    ).toBe("test123");
  });


  // --------------------------------
  // Inputs inválidos
  // --------------------------------

  test.each([
    [123],
    [3.14],
    [true],
    [false],
    [null],
    [undefined],
    [[]],
    [{}],
    [() => {}],
  ])(
    "throws TypeError for non-string input %p",
    (invalidInput) => {
      expect(() => {
        generateSlug(invalidInput);
      }).toThrow(TypeError);
    }
  );


  test.each([
    [123],
    [null],
    [[]],
    [{}],
  ])(
    "throws the expected message for invalid input %p",
    (invalidInput) => {
      expect(() => {
        generateSlug(invalidInput);
      }).toThrow("Input must be a string");
    }
  );

});

describe("tabs and line breaks", () => {

  test("removes a tab instead of converting it to %20", () => {
    expect(
      generateSlug("hello\tworld")
    ).toBe("helloworld");
  });


  test("removes a newline instead of converting it to %20", () => {
    expect(
      generateSlug("hello\nworld")
    ).toBe("helloworld");
  });


  test("removes a carriage return instead of converting it to %20", () => {
    expect(
      generateSlug("hello\rworld")
    ).toBe("helloworld");
  });


  test("removes mixed tabs and line breaks", () => {
    expect(
      generateSlug("hello\t\nworld")
    ).toBe("helloworld");
  });


  test("removes tabs at the beginning and end", () => {
    expect(
      generateSlug("\thello world\t")
    ).toBe("hello%20world");
  });


  test("removes line breaks at the beginning and end", () => {
    expect(
      generateSlug("\nhello world\n")
    ).toBe("hello%20world");
  });


  test("only regular spaces become %20 when mixed with tabs", () => {
    expect(
      generateSlug("hello \t world")
    ).toBe("hello%20world");
  });


  test("only regular spaces become %20 when mixed with newlines", () => {
    expect(
      generateSlug("hello \n world")
    ).toBe("hello%20world");
  });

});