import rgbToHex from "../rgb_to_hex.js";

describe("RGB to Hex", () => {

  test.each([
    // casos de borda
    ["rgb(0, 0, 0)", "#000000"],
    ["rgb(1, 2, 3)", "#010203"],
    ["rgb(15, 16, 17)", "#0f1011"],
    ["rgb(255, 0, 255)", "#ff00ff"],

    // casos oficiais
    ["rgb(255, 255, 255)", "#ffffff"],
    ["rgb(1, 11, 111)", "#010b6f"],
    ["rgb(173, 216, 230)", "#add8e6"],
    ["rgb(79, 123, 201)", "#4f7bc9"],
  ])(
    'rgbToHex("%s") should return "%s"',
    (input, expected) => {
      expect(rgbToHex(input)).toBe(expected);
    }
  );


  test.each([
    [123],
    [null],
    [undefined],
    [[]],
    [{}],
    [true],
  ])(
    "throws TypeError for non-string input %p",
    (invalidInput) => {
      expect(() => rgbToHex(invalidInput))
        .toThrow(TypeError);
    }
  );


  test.each([
    ["255, 255, 255"],
    ["rgb255,255,255"],
    ["rgb(255, 255)"],
    ["rgb(255, 255, 255, 0)"],
    ["abc(255, 255, 255)"],
    ["rgb()"],
    [""],
  ])(
    'throws Error for invalid RGB format "%s"',
    (invalidInput) => {
      expect(() => rgbToHex(invalidInput))
        .toThrow(Error);
    }
  );


  test.each([
    ["rgb(256, 0, 0)"],
    ["rgb(0, 256, 0)"],
    ["rgb(0, 0, 256)"],
    ["rgb(999, 10, 20)"],
  ])(
    'throws RangeError for RGB values outside 0-255: "%s"',
    (invalidInput) => {
      expect(() => rgbToHex(invalidInput))
        .toThrow(RangeError);
    }
  );

  test.each([
    ["rgb(-1, 0, 0)"],
    ["rgb(0, -1, 0)"],
    ["rgb(0, 0, -1)"],
    ])(
    'throws RangeError for negative RGB values: "%s"',
    (invalidInput) => {
        expect(() => rgbToHex(invalidInput))
        .toThrow(RangeError);
    }
  );

});

describe("RGB to Hex - optional spaces", () => {

  test.each([
    ["rgb( 1, 2, 3 )", "#010203"],
    ["rgb(1,2,3)", "#010203"],
    ["rgb(1,  2,   3)", "#010203"],
    ["rgb(  15,16,  17 )", "#0f1011"],
    ["rgb(255,0, 255)", "#ff00ff"],
  ])(
    'rgbToHex("%s") should return "%s"',
    (input, expected) => {
      expect(rgbToHex(input)).toBe(expected);
    }
  );


  test.each([
    ["rgb(1, 2)"],
    ["rgb(1)"],
    ["rgb()"],
    ["rgb(1, 2, )"],
    ["rgb(, 2, 3)"],
    ["rgb(1, , 3)"],
    ["rgb(1, 2, 3, 4)"],
    ["rgb(1 2 3)"],
    ["rgb 1, 2, 3"],
    ["1, 2, 3"],
  ])(
    'rgbToHex("%s") should reject incomplete or invalid format',
    (input) => {
      expect(() => rgbToHex(input))
        .toThrow(Error);
    }
  );

});