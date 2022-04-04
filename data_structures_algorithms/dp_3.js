// refactor unique paths problem to use memoization
let count = 0;
function uniquePaths(rows, cols, memo={}) {
  count++
  if (rows === 1 || cols === 1) return 1

  const dim = rows + cols

  if (memo[dim] === undefined) {
    memo[dim] = uniquePaths(rows - 1, cols, memo) + uniquePaths(rows, cols - 1, memo)
  }
  return memo[dim]
  // return uniquePaths(rows - 1, cols) + uniquePaths(rows, cols - 1)
}


console.log(uniquePaths(4,7)); //84
console.log(`count: ${count}`);

//recursion count before memoization: 167
