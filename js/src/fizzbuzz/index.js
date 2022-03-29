function printFizzBuzz(num) {
  const values = [];

  for (let value = 0; value <= num; value++) {
    values.push(getFizzBuzzValue(value));
  }

  return values;
}

function getFizzBuzzValue(num) {
  if (num === 0) return 0;
  if (isFizzBuzz(num)) return "FizzBuzz";
  if (isFizz(num)) return "Fizz";
  if (isBuzz(num)) return "Buzz";

  return num;
}

const isFizzBuzz = (num) => num % 3 === 0 && num % 5 === 0;
const isFizz = (num) => num % 3 === 0;
const isBuzz = (num) => num % 5 === 0;

printFizzBuzz(100);


module.exports = {
  printFizzBuzz,
  getFizzBuzzValue,
};
