/*
input: string
output: INDEX that contains the 'x'
rule:
algo:

if string is 5 chars long,
subproblem is string 4 chars long.
*/

function findX(str, index=0) {
  if (str[0] === 'x') return index
  index++
  return findX(str.slice(1, str.length), index)
}

console.log(findX('abcdefghijklmnopqrstuvwxyz'));
