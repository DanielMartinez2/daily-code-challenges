import isValidIPv4 from "../ipv4_validator.js";

describe("IPv4 Validator", () => {

  // --------------------------------
  // Casos oficiais do exercício
  // --------------------------------

  test.each([
    ["192.168.1.1", true],
    ["0.0.0.0", true],
    ["255.01.50.111", false],
    ["255.00.50.111", false],
    ["256.101.50.115", false],
    ["192.168.101.", false],
    ["192168145213", false],
  ])(
    'isValidIPv4("%s") should return %s',
    (input, expected) => {
      expect(isValidIPv4(input)).toBe(expected);
    }
  );


  // --------------------------------
  // Casos de borda
  // --------------------------------

  test.each([
    // limites válidos
    ["255.255.255.255", true],
    ["0.255.0.255", true],
    ["1.2.3.4", true],

    // zeros à esquerda
    ["01.2.3.4", false],
    ["1.02.3.4", false],
    ["1.2.003.4", false],
    ["00.0.0.0", false],

    // valores fora de 0-255
    ["256.0.0.0", false],
    ["0.256.0.0", false],
    ["0.0.256.0", false],
    ["0.0.0.256", false],
    ["999.999.999.999", false],

    // quantidade incorreta de grupos
    ["1.2.3", false],
    ["1.2.3.4.5", false],
    ["1", false],
    ["", false],

    // grupos vazios
    [".1.2.3", false],
    ["1..2.3", false],
    ["1.2..3", false],
    ["1.2.3.", false],

    // caracteres não numéricos
    ["a.2.3.4", false],
    ["1.b.3.4", false],
    ["1.2.c.4", false],
    ["1.2.3.d", false],

    // números negativos
    ["-1.2.3.4", false],
    ["1.-2.3.4", false],

    // espaços
    [" 192.168.1.1", false],
    ["192.168.1.1 ", false],
    ["192. 168.1.1", false],

    // outros formatos numéricos
    ["1.2.3.4.0", false],
    ["1.2.3.4abc", false],
    ["1.2.3.4!", false],
  ])(
    'handles edge case "%s" and returns %s',
    (input, expected) => {
      expect(isValidIPv4(input)).toBe(expected);
    }
  );


  // --------------------------------
  // Entradas inválidas por tipo
  // --------------------------------

  test.each([
    [123],
    [3.14],
    [null],
    [undefined],
    [true],
    [false],
    [[]],
    [{}],
    [[192, 168, 1, 1]],
  ])(
    "throws TypeError for non-string input %p",
    (invalidInput) => {
      expect(() => isValidIPv4(invalidInput))
        .toThrow(TypeError);
    }
  );

});