let count = 0
function golomb(n, memo={}) {
  count++
  if (n===1) return 1
  if (memo[n] === undefined) {
    memo[n] = 1 + golomb(n - golomb(golomb(n - 1, memo), memo), memo)
  }
  return memo[n]
}
// function golomb(n) {
//   count++
//   if (n===1) return 1
//   return 1 + golomb(n - golomb(golomb(n - 1)))
// }

console.log(golomb(4))
console.log(`count: ${count}`)
