/**
 * RGB to Hex

Given a CSS rgb(r, g, b) color string, return its hexadecimal equivalent.

Here are some example outputs for a given input:
Input 	Output
"rgb(255, 255, 255)" 	"#ffffff"
"rgb(1, 2, 3)" 	"#010203"

    Make any letters lowercase.
    Return a # followed by six characters. Don't use any shorthand values.

rgbToHex("rgb(255, 255, 255)") should return "#ffffff".
Passed: 2. rgbToHex("rgb(1, 11, 111)") should return "#010b6f".
Passed: 3. rgbToHex("rgb(173, 216, 230)") should return "#add8e6".
Passed: 4. rgbToHex("rgb(79, 123, 201)") should return "#4f7bc9"
 */
function rgbToHex(rgb) {
  // 1. Validar o tipo
  if (typeof rgb !== "string") {
    throw new TypeError("Input must be a string");
  }

  // 2. Validar o formato rgb(r, g, b)
  const match = rgb.match(
    /^rgb\(\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/
  );

  if (!match) {
    throw new Error("Invalid RGB format");
  }

  // 3. Converter os três canais para números
  const values = match.slice(1).map(Number);

  // 4. Validar o intervalo permitido
  if (values.some((value) => value < 0 || value > 255)) {
    throw new RangeError("RGB values must be between 0 and 255");
  }

  // 5. Converter cada canal para hexadecimal
  const hexValues = values.map((value) =>
    value.toString(16).padStart(2, "0")
  );

  return `#${hexValues.join("")}`;
}

export default rgbToHex;