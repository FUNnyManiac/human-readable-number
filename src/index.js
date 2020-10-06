module.exports = function toReadable(number) {
  const one = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",

  ];

  const teen = [
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",];

  const tens = [
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  const hundreds = [
    "one hundred",
    "two hundred",
    "three hundred",
    "four hundred",
    "five hundred",
    "six hundred",
    "seven hundred",
    "eight hundred",
    "nine hundred",
  ];

  let numberString = number.toString();

  if (number < 20) {
    return one[number];
  }

  if (numberString.length === 2) {
    if(numberString[1]==='0'){
      return tens[numberString[0]-1]
    } return tens[[numberString[0]] - 1] + " " + one[numberString[1]];
  }

  if (numberString.length === 3) {
    if (numberString[2] === '0' && numberString[1] > '0') {
      return (hundreds[[numberString[0]] - 1] + " " + tens[numberString[1] - 1])
    } else if (numberString[1] === '1') {
      return (hundreds[[numberString[0]] - 1] + " " + teen[numberString[2] - 1]);
    } else if (numberString[1] === '0' && numberString[2] === '0') {
      return (hundreds[numberString[0] - 1]);
    } else if (numberString[1] === '0') {
      return (hundreds[numberString[0] - 1] + " " + one[numberString[2]]);
    } return (hundreds[[numberString[0]] - 1] + " " + tens[numberString[1] - 1] + " " + one[numberString[2]]);
  }


}



