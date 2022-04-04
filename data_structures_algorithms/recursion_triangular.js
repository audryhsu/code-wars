/*
input: number
output: traingular number
rule: the Nth number in series is N plus the previous number

ex: the 7th number is 7 plus 21 = 28
algo:

triangular(7) = traingular(6) + n
triangular(6) = triangular(5) + n
triangular(n) = triangular(n -1) + n
*/

function triangular(n) {
  if (n === 1) return 1
  return triangular(n-1) + n
}

console.log(triangular(7));
