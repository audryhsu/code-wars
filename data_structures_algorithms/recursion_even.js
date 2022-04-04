/*
input: array of numbers
output: new array with only even numbers
rule:
algo:

*/

function evenOnly(arr) {
  if (arr.length === 0) return []
  let evens = arr[0] % 2 === 0 ? arr[0] : []
  return evenOnly(arr.slice(1, arr.length)).concat(evens)
}

result = evenOnly([1,2,3,4,5,6,6,6])
console.log(result)
