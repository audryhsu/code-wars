/*
/*
input: integer n
output: a string with dash before and after each ODD integer

rule: excludes beginning or end of string
- if n is negative, ignore the negative sign
- if n is not an integer, return empty
algo:
- check if n is empty, if so, return empty string
- split n into digits
- loop through each digit in array
  - if digit even, add digit char as a string to result
  - else if digit is odd
    - and it's not the first digit, add char as a string with dashes
    - else first digit, add dash after char
    - else if last, add dash before only
- return concatenated string

look if next number is odd;
  if yes, then add a dash to end of digit
  except if it's the last digit
*/

function dashatize(n) {
  if (!Number.isInteger(n)) {
    return 'NaN';
  }
  n = Math.abs(n) // get absolute value
  
  let numArr = n.toString().split('')
  let result = '';

  numArr.forEach((digit, idx) => {
    let currentDigit = Number(digit);
    let nextDigit = Number(numArr[idx + 1])

    if ((idx === numArr.length - 1)) {
      result += `${digit}`
    } else if ((nextDigit % 2 === 1) || (currentDigit % 2 === 1)) {
      result += `${digit}-`
    } else if ((nextDigit % 2 === 0)) {
      result += `${digit}`
    }
  })

  return result
}

// Alternative soltuions:
/*
Using regex, replace all odd digits with `-digit-`
replace all double `--` with `-`
replace `-` if string starts with dash or ends with dash with ''
*/


console.log(dashatize(6815));
console.log(dashatize(274));
console.log(dashatize(974302));
