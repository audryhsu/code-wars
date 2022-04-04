/*
input: string of alphanumeric characters
output: string incremented by 1 if ends with a number or add 1 if letter
rule:
- if string ends in letter, append 1
- if empty string, append 1
- if string ends with a number, convert number portion to an integer, then increment by 1
algo:
- loop through chars in string
  - if char is in digit array, take a slice of the string from i to end
  - check for leading zeros
    - if yes, preserve them
  - convert slice to intger using parseint
  - increment by one
  - convert back into string and prepend with leading zeros
- prepend chars with incremented string
*/

function incrementString(string) {
  let digitsArr = '0123456789'.split('');
  let digits = '';
  let result = '';

  if (!string.split('').some(char => digitsArr.includes(char))) {
    return string + 1;
  }

  for (let i = 0; i < string.length; i++) {
    if (digitsArr.includes(string[i])) {
      digits = string.slice(i);
      break;
    } else {
      result += string[i];
    }
  }
  let leadingZeros = extractLeadingZeros(digits);
  let incrementedDigit = parseInt(digits) + 1;
  let newDigit = leadingZeros + incrementedDigit;

  if (newDigit.length > digits.length && leadingZeros.length > 0) {
    newDigit = newDigit.substring(1);
  }
  return result + newDigit;
}

function extractLeadingZeros(string) {
  let zeros = '';
  if (string.startsWith('0')) {

    let i = 0;
    while (string[i] === '0') {
      zeros += '0';
      i++;
    }
  }
  return zeros;
}

console.log(incrementString('foo99')) //foo099 -> foo100
console.log(incrementString('foo099')) //foo099 -> foo100
console.log(incrementString('foo000')) //foo099 -> foo100
console.log(incrementString('foobar999'))
//foobar000"), "foobar001, got 0001
