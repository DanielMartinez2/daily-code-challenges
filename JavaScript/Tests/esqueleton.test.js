import functionToTest from "../module.js";

describe("functionToTest", () => {

  test("normal behavior", () => {
    const result = functionToTest(...);

    expect(result).toBe(...);
  });

  test("edge case", () => {
    const result = functionToTest(...);

    expect(result).toEqual(...);
  });

  test("throws for invalid input", () => {
    expect(() => {
      functionToTest(...);
    }).toThrow(TypeError);
  });

  test.each([
    [input1, expected1],
    [input2, expected2],
    [input3, expected3],
  ])(
    "handles multiple valid cases",
    (input, expected) => {
      expect(functionToTest(input))
        .toEqual(expected);
    }
  );
});