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

const password = "1234aA";
test("Check if PW is not null", () => {
  expect(isNotNull(password)).toBeTruthy();
});

test("Check if PW has right length", () => {
  expect(hasRightLength(password)).toBeTruthy();
});

test("Check if PW has uppercase character", () => {
  expect(hasUpperCaseCharacter(password)).toBeTruthy();
});

test("Check if PW has lowercase character", () => {
  expect(hasLowerCaseCharacter(password)).toBeTruthy();
});

test("Check if PW has a digit", () => {
  expect(hasDigit(password)).toBeTruthy();
});

test("Check if minimum conditions are reached", () => {
  const conditions = [
    isNotNull(password),
    hasRightLength(password),
    hasUpperCaseCharacter(password),
    hasLowerCaseCharacter(password),
    hasDigit(password),
  ];
  expect(minimumConditionsReached(conditions)).toBeTruthy();
});

test("Check if min conditions are met AND extra 4th is met", () => {
  expect(verifyPassword(password)).toBeTruthy();
});
