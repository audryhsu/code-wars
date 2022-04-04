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
  let incrementedDigit = parseInt(digits) + 1;

  console.log(digits.length, incrementedDigit.length);

  while (digits.length - incrementedDigit.toString().length > 0) {
    incrementedDigit = '0' + incrementedDigit.toString();
    console.log(incrementedDigit);
  }
  return result + incrementedDigit;
}

// console.log(incrementString('foo99')) //foo099 -> foo100
// console.log(incrementString('foo099')) //foo099 -> foo100
console.log(incrementString('foo000')) //foobar001
// console.log(incrementString('foobar999'))
//foobar000"), "foobar001, got 0001
