/*
use recursion to write a function
i: array of strings
o: count of characters in total

array that contains 4 strings
count chars from index 1 to the end plus the number of chars in the first string
count_char(arr[1])
*/

function countChars(arr) {
  if (arr.length === 0) return 0

  return countChars(arr.slice(1, arr.length)) + arr[0].length
}

let result = countChars(["ab", "c", "def", "ghij"])
console.log(result);
