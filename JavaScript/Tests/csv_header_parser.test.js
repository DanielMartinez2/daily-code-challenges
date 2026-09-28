import getHeadings from "../csv_header_parser.js";

describe("CSV Header Parser", () => {

  // --------------------------------
  // Casos oficiais
  // --------------------------------

  describe("official cases", () => {

    test.each([
      [
        "name,age,city",
        ["name", "age", "city"],
      ],
      [
        "first name,last name,phone",
        ["first name", "last name", "phone"],
      ],
      [
        "username , email , signup date ",
        ["username", "email", "signup date"],
      ],
    ])(
      'getHeadings("%s") should return %p',
      (input, expected) => {
        expect(getHeadings(input)).toEqual(expected);
      }
    );

  });


  // --------------------------------
  // Casos de borda
  // --------------------------------

  describe("edge cases", () => {

    test("handles a single heading", () => {
      expect(
        getHeadings("name")
      ).toEqual(["name"]);
    });


    test("removes leading and trailing spaces from a single heading", () => {
      expect(
        getHeadings("   username   ")
      ).toEqual(["username"]);
    });


    test("removes different amounts of whitespace around headings", () => {
      expect(
        getHeadings("  name, age  ,   city   ")
      ).toEqual(["name", "age", "city"]);
    });


    test("preserves spaces inside a heading", () => {
      expect(
        getHeadings("first name,last name,phone number")
      ).toEqual([
        "first name",
        "last name",
        "phone number",
      ]);
    });


    test("preserves uppercase and lowercase characters", () => {
      expect(
        getHeadings("First Name,AGE,City")
      ).toEqual([
        "First Name",
        "AGE",
        "City",
      ]);
    });


    test("preserves numbers inside headings", () => {
      expect(
        getHeadings("column1,column2,version 3")
      ).toEqual([
        "column1",
        "column2",
        "version 3",
      ]);
    });


    test("preserves punctuation that is not the comma separator", () => {
      expect(
        getHeadings("user-name,email_address,phone.number")
      ).toEqual([
        "user-name",
        "email_address",
        "phone.number",
      ]);
    });


    test("trims tabs around headings", () => {
      expect(
        getHeadings("\tname,\tage\t,\tcity")
      ).toEqual([
        "name",
        "age",
        "city",
      ]);
    });

  });


  // --------------------------------
  // Inputs inválidos
  // --------------------------------

  describe("invalid inputs", () => {

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
          getHeadings(invalidInput);
        }).toThrow(TypeError);
      }
    );


    test.each([
      [123],
      [null],
      [[]],
      [{}],
    ])(
      "throws the expected validation message for %p",
      (invalidInput) => {
        expect(() => {
          getHeadings(invalidInput);
        }).toThrow("Must be a string");
      }
    );

  });

});