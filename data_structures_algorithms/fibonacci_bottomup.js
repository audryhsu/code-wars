function fib(n) {
  if (n=== 1 | n=== 0) return n

  let a = 0
  let b = 1
  for (let i = 1; i < n; i++) {
    let temp = a
    a = b
    b = temp + a
  }
  return b
}

console.log(fib(3))
console.log(fib(4))
