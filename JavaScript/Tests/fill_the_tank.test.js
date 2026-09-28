import costToFill from "../fill_the_tank.js";

describe("Fill The Tank", () => {

  // --------------------------------
  // Casos oficiais
  // --------------------------------

  describe("official cases", () => {

    test.each([
      [
        20,
        0,
        4.00,
        "$80.00",
      ],
      [
        15,
        10,
        3.50,
        "$17.50",
      ],
      [
        18,
        9,
        3.25,
        "$29.25",
      ],
      [
        12,
        12,
        4.99,
        "$0.00",
      ],
      [
        15,
        9.5,
        3.98,
        "$21.89",
      ],
    ])(
      "costToFill(%p, %p, %p) should return %s",
      (tankSize, fuelLevel, pricePerGallon, expected) => {
        expect(
          costToFill(tankSize, fuelLevel, pricePerGallon)
        ).toBe(expected);
      }
    );

  });


  // --------------------------------
  // Casos de borda
  // --------------------------------

  describe("edge cases", () => {

    test("returns zero when the tank is already full", () => {
      expect(
        costToFill(20, 20, 5)
      ).toBe("$0.00");
    });


    test("calculates the cost when the tank is completely empty", () => {
      expect(
        costToFill(10, 0, 2.5)
      ).toBe("$25.00");
    });


    test("handles a decimal fuel level", () => {
      expect(
        costToFill(10, 7.5, 4)
      ).toBe("$10.00");
    });


    test("handles a decimal tank size", () => {
      expect(
        costToFill(12.5, 10, 4)
      ).toBe("$10.00");
    });


    test("handles a decimal price per gallon", () => {
      expect(
        costToFill(10, 5, 3.75)
      ).toBe("$18.75");
    });


    test("always returns exactly two decimal places", () => {
      expect(
        costToFill(10, 9, 5)
      ).toBe("$5.00");
    });


    test("rounds the result to two decimal places", () => {
      expect(
        costToFill(10, 9, 1.236)
      ).toBe("$1.24");
    });


    test("handles a zero price per gallon", () => {
      expect(
        costToFill(20, 5, 0)
      ).toBe("$0.00");
    });

  });


  // --------------------------------
  // Inputs inválidos - tipos
  // --------------------------------

  describe("invalid input types", () => {

    test.each([
      ["20", 10, 4],
      [20, "10", 4],
      [20, 10, "4"],
      [null, 10, 4],
      [20, null, 4],
      [20, 10, null],
      [undefined, 10, 4],
      [20, undefined, 4],
      [20, 10, undefined],
      [true, 10, 4],
      [20, false, 4],
      [20, 10, true],
      [[], 10, 4],
      [20, {}, 4],
    ])(
      "throws TypeError for invalid input (%p, %p, %p)",
      (tankSize, fuelLevel, pricePerGallon) => {
        expect(() => {
          costToFill(
            tankSize,
            fuelLevel,
            pricePerGallon
          );
        }).toThrow(TypeError);
      }
    );

  });


  // --------------------------------
  // Inputs inválidos - valores
  // --------------------------------

  describe("invalid numeric values", () => {

    test("throws RangeError when tank size is negative", () => {
      expect(() => {
        costToFill(-20, 10, 4);
      }).toThrow(RangeError);
    });


    test("throws RangeError when fuel level is negative", () => {
      expect(() => {
        costToFill(20, -1, 4);
      }).toThrow(RangeError);
    });


    test("throws RangeError when price per gallon is negative", () => {
      expect(() => {
        costToFill(20, 10, -4);
      }).toThrow(RangeError);
    });


    test("throws RangeError when fuel level exceeds tank capacity", () => {
      expect(() => {
        costToFill(20, 21, 4);
      }).toThrow(RangeError);
    });

  });

});