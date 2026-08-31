import battle from "../character_battle.js";

describe("Character Battle", () => {

  test("normal behavior", () => {
    expect(
      battle("abc", "xyz")
    ).toBe("We lost");
  });


  test("opponent retreats when their army is smaller", () => {
    expect(
      battle("abcdef", "xy")
    ).toBe("Opponent retreated");
  });


  test("we retreat when opponent army is bigger", () => {
    expect(
      battle("abcdef", "xyz12344555")
    ).toBe("We retreated");
  });


  test.each([
    [[1, 2, 3], "abc"],
    ["abc", 123],
    [null, "abc"],
    ["abc", undefined],
  ])(
    "throws TypeError for invalid inputs",
    (myArmy, opposingArmy) => {
      expect(() => {
        battle(myArmy, opposingArmy);
      }).toThrow(TypeError);
    }
  );


  test.each([
    ["Hello", "World", "We lost"],
    ["pizza", "salad", "We won"],
    ["C@T5", "D0G$", "We won"],
    ["kn!ght", "orc", "Opponent retreated"],
    ["PC", "MAC", "We retreated"],
    ["Wizards", "Dragons", "It was a tie"],
    ["Mr. Smith", "Dr. Jones", "It was a tie"],
  ])(
    'battle("%s", "%s") should return "%s"',
    (myArmy, opposingArmy, expected) => {
      expect(
        battle(myArmy, opposingArmy)
      ).toBe(expected);
    }
  );
  test.each([
  // caracteres diferentes, mas ambos com força 0
  ["@", "$", "It was a tie"],
  ["!", "#", "It was a tie"],

  // dígito 0 também possui força 0
  ["0", "@", "It was a tie"],

  // caracteres diferentes com a mesma força
  // a = 1 e "1" = 1
  ["a", "1", "It was a tie"],

  // b = 2 e "2" = 2
  ["b", "2", "It was a tie"],

  // mesmo caractere = mesma força
  ["A", "A", "It was a tie"],

  // várias batalhas individuais empatadas
  // a x 1 → 1 = 1
  // 1 x a → 1 = 1
  // @ x $ → 0 = 0
  ["a1@", "1a$", "It was a tie"],
])(
  'battle("%s", "%s") should return "%s" when individual battles are tied',
  (myArmy, opposingArmy, expected) => {
    expect(battle(myArmy, opposingArmy)).toBe(expected);
  }
);
test("tied individual battles do not count as victories", () => {
  // a x 1 → empate (1 x 1)
  // Z x A → nós vencemos (52 x 27)
  // @ x $ → empate (0 x 0)

  expect(battle("aZ@", "1A$")).toBe("We won");
});


test("tied battles do not prevent the opponent from winning", () => {
  // a x 1 → empate (1 x 1)
  // A x Z → adversário vence (27 x 52)
  // @ x $ → empate (0 x 0)

  expect(battle("aA@", "1Z$")).toBe("We lost");
});
test("ignores a tied battle at the beginning", () => {
  // a x 1 → empate (1 x 1)
  // Z x A → nós vencemos (52 x 27)
  // b x a → nós vencemos (2 x 1)

  expect(battle("aZb", "1Aa")).toBe("We won");
});


test("ignores a tied battle in the middle", () => {
  // Z x A → nós vencemos
  // a x 1 → empate
  // b x a → nós vencemos

  expect(battle("Zab", "A1a")).toBe("We won");
});


test("ignores a tied battle at the end", () => {
  // Z x A → nós vencemos
  // b x a → nós vencemos
  // a x 1 → empate

  expect(battle("Zba", "Aa1")).toBe("We won");
});

});