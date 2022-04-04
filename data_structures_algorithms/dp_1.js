/*
input: array of numbers
output: sum as long as number doesn't bring sum over 100
rule: if a number does put sum over 100, ignore
otherwise, add the number to the sum
algo:
if array is empty, return 0
- if sum of first element and sum of rest of array > 100,
  - return sum of rest of array
else return sum of first element and sum of rest of array

Refactor by saving value into a variable
*/
let count = 0
function addUntil100(arr) {
  if (arr.length === 0) return 0

  count++
  let sumOfSlice = addUntil100(arr.slice(1, arr.length)) //

  if (arr[0] + sumOfSlice > 100) {
    return sumOfSlice
  } else {
    return arr[0] + sumOfSlice
  }
}

console.log(addUntil100([1,25,50,200, 10,10]));
console.log(`count recursion: ${count}`);
