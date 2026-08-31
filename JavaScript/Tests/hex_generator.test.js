import generateHex from "../hex_generator.js";
import { expect, jest } from "@jest/globals";

describe("Hex Generator", () => {

  afterEach(() => {
    jest.restoreAllMocks();
  });


  test("returns Invalid color for an unsupported color", () => {
    expect(generateHex("yellow")).toBe("Invalid color");
  });

  test.each([
    [["alfa"]],
    [123],
    [null],
    [undefined],
    [{}],
    ])(
    "throws TypeError for invalid input %p",
    (invalidInput) => {
        expect(() => generateHex(invalidInput))
        .toThrow(TypeError);
    }
    );
  test("returns a six-character string", () => {
    const result = generateHex("red");

    expect(typeof result).toBe("string");
    expect(result).toHaveLength(6);
  });


  test("returns a valid hexadecimal color", () => {
    const result = generateHex("red");

    expect(result).toMatch(/^[0-9a-fA-F]{6}$/);
  });


  test.each([
    ["red"],
    ["green"],
    ["blue"],
  ])(
    "%s should be the dominant color",
    (color) => {
      const result = generateHex(color);

      const red = parseInt(result.slice(0, 2), 16);
      const green = parseInt(result.slice(2, 4), 16);
      const blue = parseInt(result.slice(4, 6), 16);

      if (color === "red") {
        expect(red).toBeGreaterThan(green);
        expect(red).toBeGreaterThan(blue);
      }

      if (color === "green") {
        expect(green).toBeGreaterThan(red);
        expect(green).toBeGreaterThan(blue);
      }

      if (color === "blue") {
        expect(blue).toBeGreaterThan(red);
        expect(blue).toBeGreaterThan(green);
      }
    }
  );


  test.each([
    ["red", "802060"],
    ["green", "208060"],
    ["blue", "206080"],
  ])(
    "generates the expected %s color when Math.random is controlled",
    (color, expected) => {
      jest.spyOn(Math, "random")
        .mockReturnValueOnce(0.5)
        .mockReturnValueOnce(0.25)
        .mockReturnValueOnce(0.75);

      expect(generateHex(color)).toBe(expected);
    }
  );


  test.each([
    ["red"],
    ["green"],
    ["blue"],
  ])(
    "calling generateHex(%s) with different random values produces different colors",
    (color) => {
      jest.spyOn(Math, "random")
        // primeira chamada
        .mockReturnValueOnce(0.5)
        .mockReturnValueOnce(0.25)
        .mockReturnValueOnce(0.75)

        // segunda chamada
        .mockReturnValueOnce(0.8)
        .mockReturnValueOnce(0.1)
        .mockReturnValueOnce(0.2);

      const firstResult = generateHex(color);
      const secondResult = generateHex(color);

      expect(firstResult).not.toBe(secondResult);
    }
  );
  test("keeps the selected color dominant at the minimum random value", () => {
    jest.spyOn(Math, "random")
        .mockReturnValue(0);

    expect(generateHex("red")).toBe("010000");
  });

});