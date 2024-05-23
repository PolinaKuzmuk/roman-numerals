const romanNumeralsConverter = require("./romanNumerals");

describe("Roman numerals", () => {
  test("should change 1 to I", () => {
    const initialNumber = 1;

    const result = romanNumeralsConverter(initialNumber);

    expect(result).toBe("I");
  });

  test("should change 2 to II", () => {
    const initialNumber = 2;

    const result = romanNumeralsConverter(initialNumber);

    expect(result).toBe("II");
  });

  test("should change 3 to III", () => {
    const initialNumber = 3;

    const result = romanNumeralsConverter(initialNumber);

    expect(result).toBe("III");
  });

  test("should change 6 to VI", () => {
    const initialNumber = 6;

    const result = romanNumeralsConverter(initialNumber);

    expect(result).toBe("VI");
  });

  test("should change 7 to VII", () => {
    const initialNumber = 7;

    const result = romanNumeralsConverter(initialNumber);

    expect(result).toBe("VII");
  });

  test("should change 8 to VIII", () => {
    const initialNumber = 8;

    const result = romanNumeralsConverter(initialNumber);

    expect(result).toBe("VIII");
  });

  test("should change 11 to XI", () => {
    const initialNumber = 11;

    const result = romanNumeralsConverter(initialNumber);

    expect(result).toBe("XI");
  });

  test("should change 12 to XII", () => {
    const initialNumber = 12;

    const result = romanNumeralsConverter(initialNumber);

    expect(result).toBe("XII");
  });

  test("should change 13 to XIII", () => {
    const initialNumber = 13;

    const result = romanNumeralsConverter(initialNumber);

    expect(result).toBe("XIII");
  });

  test("should change 10 to X", () => {
    const initialNumber = 10;

    const result = romanNumeralsConverter(initialNumber);

    expect(result).toBe("X");
  });

  test("should change 20 to XX", () => {
    const initialNumber = 20;

    const result = romanNumeralsConverter(initialNumber);

    expect(result).toBe("XX");
  });

  test("should change 30 to XXX", () => {
    const initialNumber = 30;

    const result = romanNumeralsConverter(initialNumber);

    expect(result).toBe("XXX");
  });

  test("should change 23 to XXIII", () => {
    const initialNumber = 23;

    const result = romanNumeralsConverter(initialNumber);

    expect(result).toBe("XXIII");
  });

  test("should change 50 to L", () => {
    const initialNumber = 50;

    const result = romanNumeralsConverter(initialNumber);

    expect(result).toBe("L");
  });

  test("should change 60 to LX", () => {
    const initialNumber = 60;

    const result = romanNumeralsConverter(initialNumber);

    expect(result).toBe("LX");
  });

  test("should change 70 to LXX", () => {
    const initialNumber = 70;

    const result = romanNumeralsConverter(initialNumber);

    expect(result).toBe("LXX");
  });

  test("should change 9 to IX", () => {
    const initialNumber = 9;

    const result = romanNumeralsConverter(initialNumber);

    expect(result).toBe("IX");
  });

  test("should change 90 to XC", () => {
    const initialNumber = 90;

    const result = romanNumeralsConverter(initialNumber);

    expect(result).toBe("XC");
  });

  test("should change 900 to CM", () => {
    const initialNumber = 900;

    const result = romanNumeralsConverter(initialNumber);

    expect(result).toBe("CM");
  });

  test("should change 89 to LXXXIX", () => {
    const initialNumber = 89;

    const result = romanNumeralsConverter(initialNumber);

    expect(result).toBe("LXXXIX");
  });

  test("should change 44 to XLIV", () => {
    const initialNumber = 44;

    const result = romanNumeralsConverter(initialNumber);

    expect(result).toBe("XLIV");
  });

  test("should change 414 to CDXIV", () => {
    const initialNumber = 414;

    const result = romanNumeralsConverter(initialNumber);

    expect(result).toBe("CDXIV");
  });
});
