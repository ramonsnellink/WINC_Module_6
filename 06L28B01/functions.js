const addOne = function (numbers) {
  const numbersPlusOne = numbers.map((number) => {
    return (number += 1);
  });
  console.log(numbersPlusOne);
  return numbersPlusOne;
};

const getWordLengths = function (someWords) {
  const wordsLengthsArray = someWords.map((word) => {
    return word.length;
  });
  return wordsLengthsArray;
};

const findNeedle = function (words, wordToCheck) {
  const findWordIndex = words.findIndex((word) => {
    return word === wordToCheck;
  });

  return findWordIndex;
};

module.exports = { addOne, getWordLengths, findNeedle };
