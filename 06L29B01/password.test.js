const {
  verifyPassword,
  hasRightLength,
  isNotNull,
  hasUpperCaseCharacter,
  hasLowerCaseCharacter,
  hasDigit,
  minimumConditionsReached,
} = require("./password");

// test("Check if at least3 conditions are met, and a 4th that is always true", () => {
//   expect(verifyPassword()).toBeTruthy();
// });

describe("Password utility functions", () => {
  test("isNotNull, null", () => {
    expect(isNotNull(null)).toBe(false);
  });

  test("isNotNull, a", () => {
    expect(isNotNull("a")).toBe(true);
  });

  test("hasRightLength, abc", () => {
    expect(hasRightLength("abc")).toBe(true);
  });

  test("hasRightLength, abcdefghijkl", () => {
    expect(hasRightLength("abcdefghijkl")).toBe(false);
  });

  test("hasRightLength, null", () => {
    expect(hasRightLength(null)).toBe(false);
  });

  test("hasUpperCaseCharacter ramon", () => {
    expect(hasUpperCaseCharacter("ramon")).toBe(false);
  });

  test("hasUpperCaseCharacter Ramon", () => {
    expect(hasUpperCaseCharacter("Ramon")).toBe(true);
  });

  test("hasLowerCaseCharacter hermine", () => {
    expect(hasLowerCaseCharacter("hermine")).toBe(true);
  });

  test("hasLowerCaseCharacter hermine", () => {
    expect(hasLowerCaseCharacter("HERMINE")).toBe(false);
  });

  test("hasDigit, abde", () => {
    expect(hasDigit("abde")).toBe(false);
  });
  test("hasDigit, abde123", () => {
    expect(hasDigit("abde123")).toBe(true);
  });
});

// copy-pasted some from the solution because I was too lazy.

describe("Check combinations of conditions", () => {
  test("minimumConditionsReached, all conditions false", () => {
    const conditions = [false, false, false, false, false];
    expect(minimumConditionsReached(conditions)).toBe(false);
  });

  test("minimumConditionsReached under cutoff", () => {
    const conditions = [true, true, false, false, false];
    expect(minimumConditionsReached(conditions)).toBe(false);
  });

  test("minimumConditionsReached on cutoff", () => {
    const conditions = [true, true, true, false, false];
    expect(minimumConditionsReached(conditions)).toBe(true);
  });

  test("minimumConditionsReached over cutoff", () => {
    const conditions = [true, true, true, true, false];
    expect(minimumConditionsReached(conditions)).toBe(true);
  });
});

describe("Verify password", () => {
  test("verifyPassword null", () => {
    expect(verifyPassword(null)).toBe(false);
  });

  test("verifyPassword '1'", () => {
    expect(verifyPassword("1")).toBe(false);
  });

  test("verifyPassword only digits", () => {
    expect(verifyPassword("12345678")).toBe(false);
  });

  test("verifyPassword only uppercase", () => {
    expect(verifyPassword("ABC")).toBe(false);
  });

  test("verifyPassword only lowercase", () => {
    expect(verifyPassword("abc")).toBe(true);
  });

  test("verifyPassword only lowercase, but too long", () => {
    expect(verifyPassword("abcdefghifdgfd")).toBe(false);
  });

  test("verifyPassword lowercase and uppercase, but too long", () => {
    expect(verifyPassword("Ab")).toBe(true);
  });

  test("verifyPassword, correct password", () => {
    expect(verifyPassword("Ab1")).toBe(true);
  });
});
