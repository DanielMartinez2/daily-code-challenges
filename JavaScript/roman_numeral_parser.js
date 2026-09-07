/*
    Roman Numeral Parser

    Given a string representing a Roman numeral, return its integer value.

    Roman numerals consist of the following symbols and values:
    Symbol 	Value
    I 	1
    V 	5
    X 	10
    L 	50
    C 	100
    D 	500
    M 	1000

        Numerals are read left to right. If a smaller numeral appears before a larger one, the value is subtracted. Otherwise, values are added.
 */
function parseRomanNumeral(numeral) {
  if (typeof numeral !== "string") {
    throw new TypeError("Input must be a string");
  }

  const romanNumeralValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let previousNumber = 0;
  let result = 0;

  numeral.split("").forEach((elem) => {
    if (!(elem in romanNumeralValues)) {
      throw new Error("Invalid Roman numeral symbol");
    }

    const elemValue = romanNumeralValues[elem];

    if (
      previousNumber === 0 ||
      previousNumber >= elemValue
    ) {
      result += elemValue;
    } else {
      result += elemValue - 2 * previousNumber;
    }

    previousNumber = elemValue;
  });

  return result;
}
export default parseRomanNumeral;