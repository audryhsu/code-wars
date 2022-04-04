function stairs(n) {
  if (n <= 0) return 0
  if (n === 1) return 1
  if (n === 2) return 2
  if (n=== 3) return 3
  return stairs(n - 1) + stairs(n-2) + stairs(n-3)
}

stairs(2)
stairs(3)
stairs(4)
