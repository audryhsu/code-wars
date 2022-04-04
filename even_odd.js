let codeA = 'A'.charCodeAt(),
    codeZ = 'Z'.charCodeAt(),
    codea = 'a'.charCodeAt(),
    codez = 'z'.charCodeAt();

function rot13(message) {
  return message.split('').map(char => {
    const regex = new RegExp(/[a-zA-Z]/);

    if (regex.test(char)) {
      let lowercase = char === char.toLowerCase() ? true:false;
      let wrapCode, startCode;
      if (lowercase) {
        [wrapCode, startCode] = [codez, codea];
      } else {
        [wrapCode, startCode] = [codeZ, codeA]
      }
      let code = char.charCodeAt() + 13

      if (code > wrapCode) {
        code = (code % (wrapCode + 1)) + startCode;
      }
      return String.fromCharCode(code);
    } else {
      return char
    }
  }).join('');
}
//
// function rot13(message) {
//   let result = '';
//     const regex = new RegExp(/[a-zA-Z]/);
//   for (let i = 0; i < message.length; i++) {
//     if (regex.test(message[i])) {
//       let lowercase = message[i] === message[i].toLowerCase() ? true:false;
//       let wrapCode, startCode;
//       if (lowercase) {
//         [wrapCode, startCode] = [122, 96];
//       } else {
//         [wrapCode, startCode] = [90, 64]
//       }
//       let code = message[i].charCodeAt() + 13
//
//       if (code > wrapCode) {
//         code = (code % wrapCode) + startCode;
//       }
//       result += String.fromCharCode(code);
//     } else {
//       result += message[i]
//     }
//   }
//   return result;
// }

console.log(rot13('abcdefghijklmnopqrstuvwxyz'))
console.log(rot13('lqnqo'))
console.log(rot13('lqAqo'))
// console.log(rot13('grfg'));
// console.log(rot13('gr00'));
// console.log(rot13('aWeSomE'));

/*
input: string
output: new string, each letter replaced with letter 3 letters after in alphabet
rule: return numbers or special characters as is
- case should remain the same
algo:
- loop through chars input message
- if char is not alphabetic, return char
- else, getCharCode, add 13, then return fromCharCode

*/
