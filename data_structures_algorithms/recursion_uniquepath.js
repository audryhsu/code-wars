/*
input: row and col numbers
output: number of possible shortest paths
rule:
algo:

rows - 1 + cols - 1

unique(3, 7) = 2+6 = 8
unique(2, 6) = 1+5 = 6

unique(3,4) = 5
unique(3, 3) = 4
unique(2,2) = 2
unique(1, 2) = 1
unique(1, 1) = 0
*/

function unique(r, c) {
  console.log(`RC : ${r}, ${c}`);
  if (r === 1 && c === 1) return 0
  else if (r === 1 && c > 1) return c - 1
  else if (c === 1 && r > 1) return r - 1
  else {
    // let diff = (r - 1) + (c - 1)
    return unique(r -1, c-1) + 2
  }
}

console.log(unique(3,7));
console.log(unique(2,6));
console.log(unique(2,2));
