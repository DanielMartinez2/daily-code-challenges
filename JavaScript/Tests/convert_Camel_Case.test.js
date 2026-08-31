import toCamelCase from "../convert_Camel_Case.js";

describe("Camel Case", () => {

  test("normal behavior", () => {
    expect(
      toCamelCase("low carb")
    ).toBe("lowCarb");
  });  

  test("test single word", () => {
    expect(
      toCamelCase("ESTIMATION")
    ).toBe("estimation");
  });  

  test("test dash", () => {
    expect(
      toCamelCase("low-key")
    ).toBe("lowKey");
  });  

  test("test underscore", () => {
    expect(
      toCamelCase("monkey_throws_banana")
    ).toBe("monkeyThrowsBanana");
  });

  test("normalizes mixed uppercase and lowercase words", () => {
    expect(
      toCamelCase("monkey THROWS  bANANA")
    ).toBe("monkeyThrowsBanana");
  });

  test("handles an empty string", () => {
    expect(toCamelCase("")).toBe("");
    });

    test("handles a single lowercase word", () => {
    expect(toCamelCase("hello")).toBe("hello");
    });

    test("handles a single uppercase character", () => {
    expect(toCamelCase("A")).toBe("a");
    });

    test("handles multiple consecutive spaces", () => {
    expect(toCamelCase("hello   world")).toBe("helloWorld");
    });

    test("handles multiple consecutive dashes", () => {
    expect(toCamelCase("hello---world")).toBe("helloWorld");
    });

    test("handles multiple consecutive underscores", () => {
    expect(toCamelCase("hello___world")).toBe("helloWorld");
    });

    test("handles mixed consecutive separators", () => {
    expect(toCamelCase("hello-_ -__world")).toBe("helloWorld");
    });

    test("handles separators at the beginning and end", () => {
    expect(toCamelCase("__hello-world--")).toBe("helloWorld");
    });

    test("handles one-character words", () => {
    expect(toCamelCase("a b c")).toBe("aBC");
    });

    test("handles a string containing only separators", () => {
    expect(toCamelCase("-_  __---")).toBe("");
    });
  test.each([
    [[1, 2, 3]],
    [123],
    [null],
    [undefined],
    [{}],
    [true],
    ])(
    "throws TypeError for invalid input %p",
    (s) => {
        expect(() => toCamelCase(s)).toThrow(TypeError);
    }
    );


  test.each([
    ["hello world", "helloWorld"],
    ["HELLO WORLD", "helloWorld"],
    ["secret agent-X", "secretAgentX"],    
    ["FREE cODE cAMP", "freeCodeCamp"],
    ["ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk", "yeOldSeaFaringBuccaneerWithAPegLegAndAParrotNamedSquawk"],    
  ])(
    'toCamelCase("%s") should return "%s"',
    (input, expected) => {
      expect(
        toCamelCase(input)
      ).toBe(expected);
    }
  );
});