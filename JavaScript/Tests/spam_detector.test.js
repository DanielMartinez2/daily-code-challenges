import isSpam from "../spam_detector.js";

describe("Spam Detector", () => {

  // --------------------------------
  // Casos oficiais
  // --------------------------------

  describe("official cases", () => {

    test.each([
      [
        "+0 (200) 234-0182",
        false,
      ],
      [
        "+091 (555) 309-1922",
        true,
      ],
      [
        "+1 (555) 435-4792",
        true,
      ],
      [
        "+0 (955) 234-4364",
        true,
      ],
      [
        "+0 (155) 131-6943",
        true,
      ],
      [
        "+0 (555) 135-0192",
        true,
      ],
      [
        "+0 (555) 564-1987",
        true,
      ],
      [
        "+00 (555) 234-0182",
        false,
      ],
    ])(
      "isSpam(%s) should return %s",
      (number, expected) => {
        expect(isSpam(number)).toBe(expected);
      }
    );

  });


  // --------------------------------
  // Country code
  // --------------------------------

  describe("country code rules", () => {

    test("accepts a one-digit country code starting with zero", () => {
      expect(
        isSpam("+0 (555) 234-0182")
      ).toBe(false);
    });


    test("accepts a two-digit country code starting with zero", () => {
      expect(
        isSpam("+00 (555) 234-0182")
      ).toBe(false);
    });


    test("marks a three-digit country code as spam", () => {
      expect(
        isSpam("+012 (555) 234-0182")
      ).toBe(true);
    });


    test("marks a one-digit country code not starting with zero as spam", () => {
      expect(
        isSpam("+1 (555) 234-0182")
      ).toBe(true);
    });


    test("marks a two-digit country code not starting with zero as spam", () => {
      expect(
        isSpam("+10 (555) 234-0182")
      ).toBe(true);
    });

  });


  // --------------------------------
  // Area code
  // --------------------------------

  describe("area code rules", () => {

    test("accepts area code exactly 200", () => {
      expect(
        isSpam("+0 (200) 234-0182")
      ).toBe(false);
    });


    test("accepts area code exactly 900", () => {
      expect(
        isSpam("+0 (900) 234-0182")
      ).toBe(false);
    });


    test("marks area code below 200 as spam", () => {
      expect(
        isSpam("+0 (199) 234-0182")
      ).toBe(true);
    });


    test("marks area code above 900 as spam", () => {
      expect(
        isSpam("+0 (901) 234-0182")
      ).toBe(true);
    });

  });


  // --------------------------------
  // Soma dos três primeiros dígitos
  // --------------------------------

  describe("local number sum rule", () => {

    test("marks as spam when a one-digit sum appears in the last four digits", () => {
      expect(
        isSpam("+0 (444) 135-0192")
      ).toBe(true);
    });


    test("marks as spam when a two-digit sum appears in the last four digits", () => {
      expect(
        isSpam("+0 (444) 564-7158")
      ).toBe(true);
    });


    test("does not mark as spam when the sum is absent", () => {
      expect(
        isSpam("+0 (444) 564-1987")
      ).toBe(false);
    });

  });


  // --------------------------------
  // Quatro ou mais dígitos consecutivos
  // --------------------------------

  describe("consecutive digit rule", () => {

    test("marks four identical digits in a row as spam", () => {
      expect(
        isSpam("+0 (555) 234-7777")
      ).toBe(true);
    });


    test("does not mark only three identical digits as spam", () => {
      expect(
        isSpam("+0 (444) 234-0182")
      ).toBe(false);
    });


    test("detects consecutive digits across formatting characters", () => {
      expect(
        isSpam("+0 (555) 564-1987")
      ).toBe(true);
    });


    test("detects repeated digits across the hyphen", () => {
      expect(
        isSpam("+0 (555) 333-3018")
      ).toBe(true);
    });

  });


  // --------------------------------
  // Formato inválido
  // --------------------------------

  describe("invalid phone number format", () => {

    test.each([
      ["0 (555) 234-0182"],          // sem +
      ["+0(555) 234-0182"],          // sem espaço
      ["+0 (55) 234-0182"],          // area code curto
      ["+0 (5555) 234-0182"],        // area code longo
      ["+0 (555) 23-0182"],          // primeira parte local curta
      ["+0 (555) 2345-0182"],        // primeira parte local longa
      ["+0 (555) 234-018"],          // última parte curta
      ["+0 (555) 234-01822"],        // última parte longa
      ["+0 [555] 234-0182"],         // delimitadores incorretos
      ["+0 (555) 234 0182"],         // sem hífen
      ["abc +0 (555) 234-0182"],     // texto antes
      ["+0 (555) 234-0182 abc"],     // texto depois
      [""],
    ])(
      "throws Error for malformed phone number %p",
      (invalidNumber) => {
        expect(() => {
          isSpam(invalidNumber);
        }).toThrow(Error);
      }
    );


    test("throws the expected error message for invalid format", () => {
      expect(() => {
        isSpam("+0 555 234 0182");
      }).toThrow(
        "Phone number must be in the format: +A (BBB) CCC-DDDD"
      );
    });

  });


  // --------------------------------
  // Tipos inválidos
  // --------------------------------

  describe("invalid input types", () => {

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
          isSpam(invalidInput);
        }).toThrow(TypeError);
      }
    );

  });
  test("throws the expected message for non-string input", () => {
  expect(() => {
    isSpam(123);
  }).toThrow("Input must be a string");
});

});