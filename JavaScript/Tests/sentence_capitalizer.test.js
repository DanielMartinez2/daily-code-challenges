import capitalize from "../sentence_capitalizer.js";

describe("Sentence Capitalizer", () => {

  // --------------------------------
  // Casos oficiais
  // --------------------------------

  describe("official cases", () => {

    test.each([
      [
        "this is a simple sentence.",
        "This is a simple sentence.",
      ],
      [
        "hello world. how are you?",
        "Hello world. How are you?",
      ],
      [
        "i did today's coding challenge... it was fun!!",
        "I did today's coding challenge... It was fun!!",
      ],
      [
        "crazy!!!strange???unconventional...sentences.",
        "Crazy!!!Strange???Unconventional...Sentences.",
      ],
      [
        "there's a space before this period . why is there a space before that period ?",
        "There's a space before this period . Why is there a space before that period ?",
      ],
    ])(
      'capitalize("%s") should return "%s"',
      (input, expected) => {
        expect(capitalize(input)).toBe(expected);
      }
    );

  });


  // --------------------------------
  // Casos de borda
  // --------------------------------

  describe("edge cases", () => {

    test("handles an empty string", () => {
      expect(capitalize("")).toBe("");
    });


    test("handles a single lowercase letter", () => {
      expect(capitalize("a")).toBe("A");
    });


    test("preserves a single uppercase letter", () => {
      expect(capitalize("A")).toBe("A");
    });


    test("capitalizes a sentence without ending punctuation", () => {
      expect(
        capitalize("hello world")
      ).toBe("Hello world");
    });


    test("preserves a sentence that already starts with uppercase", () => {
      expect(
        capitalize("Hello world.")
      ).toBe("Hello world.");
    });


    test("preserves casing of all characters except the first letter", () => {
      expect(
        capitalize("hELLO wORLD. jAVAsCRIPT iS FUN.")
      ).toBe("HELLO wORLD. JAVAsCRIPT iS FUN.");
    });


    test("handles leading spaces before the first sentence", () => {
      expect(
        capitalize("   hello world.")
      ).toBe("   Hello world.");
    });


    test("handles multiple spaces after sentence punctuation", () => {
      expect(
        capitalize("hello.     how are you?")
      ).toBe("Hello.     How are you?");
    });


    test("handles consecutive punctuation marks", () => {
      expect(
        capitalize("hello!!! how are you??? fine...")
      ).toBe("Hello!!! How are you??? Fine...");
    });


    test("handles sentences without spaces between them", () => {
      expect(
        capitalize("hello.world?goodbye!")
      ).toBe("Hello.World?Goodbye!");
    });


    test("preserves punctuation-only input", () => {
      expect(
        capitalize("...!!!???")
      ).toBe("...!!!???");
    });


    test("preserves spaces-only input", () => {
      expect(
        capitalize("     ")
      ).toBe("     ");
    });


    test("ignores numbers while looking for the first letter", () => {
      expect(
        capitalize("123hello. 456world!")
      ).toBe("123Hello. 456World!");
    });


    test("preserves special characters before the first letter", () => {
      expect(
        capitalize("@#$hello. %&world!")
      ).toBe("@#$Hello. %&World!");
    });


    test("preserves numbers inside sentences", () => {
      expect(
        capitalize("version 2 is ready. version 3 is next.")
      ).toBe("Version 2 is ready. Version 3 is next.");
    });


    test("preserves apostrophes", () => {
      expect(
        capitalize("it's working. don't change it!")
      ).toBe("It's working. Don't change it!");
    });


    test("handles mixed sentence terminators", () => {
      expect(
        capitalize("hello?!?world!?!test...")
      ).toBe("Hello?!?World!?!Test...");
    });


    test("preserves tabs and newlines while capitalizing the next letter", () => {
      expect(
        capitalize("hello.\nworld!\thow are you?")
      ).toBe("Hello.\nWorld!\tHow are you?");
    });

  });


  // --------------------------------
  // Inputs inválidos
  // --------------------------------

  describe("invalid inputs", () => {

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
          capitalize(invalidInput);
        }).toThrow(TypeError);
      }
    );


    test.each([
      [123],
      [null],
      [[]],
      [{}],
    ])(
      "throws the expected validation message for %p",
      (invalidInput) => {
        expect(() => {
          capitalize(invalidInput);
        }).toThrow("Input must be a string");
      }
    );

  });

});