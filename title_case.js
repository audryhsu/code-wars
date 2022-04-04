/*
input: string phrase, string of minor words space-deliminted, case insensitive
output: input string in title case

rule:
- first word is alaways title cased
- rest of phrase should be title cased except if in minor words
algo:
- create minor words array from second arg (all lower caased), or undefined if arg not provided
- split input string into words array
- loop through words
  - if first word, title case
  - check if lower cased word is in minor words array
  - if it is, return lower cased word
  - else, return title cased word

- define function to title case a word
  - split word into chars
  - return first letter upper cased, the rest lower cased
*/

function titleCase(string, minorWords=undefined) {
  minorWords = minorWords ? minorWords.split(' ').map((word, index) => word.toLowerCase()) : undefined;

  console.log(minorWords);

  let arr = string.split(' ').map((word, index) => {
    if (index === 0) {
      return capitalizeFirstLetter(word)
    } else if (minorWords && minorWords.includes(word.toLowerCase())) {
      return word.toLowerCase()
    } else {
      return capitalizeFirstLetter(word);
    }
  });
  return arr.join(' ');
}
// console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'));

function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.substring(1).toLowerCase()
}
