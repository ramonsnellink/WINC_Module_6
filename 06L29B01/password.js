// password is korter dan 9 karakters
// password is niet null
// password heeft 1 of meer uppercase karakters
// password heeft 1 of meer lowercase karakters
// password heeft 1 of meer cijfers

// Een wachtwoord wordt alléén goedgekeurd als:

// tenminste 3 van de bovenstaande condities true zijn
// conditie 4 true is (die moet dus altijd true zijn)

// "Outer" function
// Utility functions

const isNotNull = (str) => {
  return str !== null;
};

const hasRightLength = (str) => {
  return str.length <= 9;
};

const hasUpperCaseCharacter = (str) => {
  return str !== str.toLowerCase();
};

const hasLowerCaseCharacter = (str) => {
  return str !== str.toUpperCase();
};

const hasDigit = (str) => {
  return /\d/.test(str);
};

const minimumConditionsReached = (conditions) => {
  // conditions is an array of booleans
  trueConditions = conditions.filter((bool) => bool);
  return trueConditions.length >= 3;
};

// "Outer" function
const verifyPassword = (password) => {
  const conditions = [
    isNotNull(password),
    hasRightLength(password),
    hasUpperCaseCharacter(password),
    hasLowerCaseCharacter(password),
    hasDigit(password),
  ];
  const result = minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

  return result;
};

module.exports = {
  verifyPassword,
  hasRightLength,
  isNotNull,
  hasUpperCaseCharacter,
  hasLowerCaseCharacter,
  hasDigit,
  minimumConditionsReached,
};
