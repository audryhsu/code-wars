/*
Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"
with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
*/
function primeFactors(n) {
  let factors = [];
  while (n % 2 === 0) {
    n = n / 2;
    factors.push(2)
  }
  for (let i = 3; i <= Math.floor(Math.sqrt(n)); i+=2) {
    while (n % i === 0) {
      n = n / i;
      factors.push(i)
    }
  }
  if (n > 2) {
    factors.push(n)g
  }
  return formatFactors(factors)
}

function formatFactors(factorsArray) {
  let dedupedFactors = [...new Set(factorsArray)]
  let str =""
  let strResults = "";

  let powers = dedupedFactors.map((factor, _) => {
    return factorsArray.filter(num => num === factor).length
  });

  for (let i = 0; i < dedupedFactors.length; i++) {
    if (powers[i] > 1) {
      str = `(${dedupedFactors[i]}**${powers[i]})`
    } else {
      str = `(${dedupedFactors[i]})`
    }
    strResults += str;
  }
  return strResults;
}

console.log(primeFactors(15073))
// describe("Tests", () => {
//   it("test", () => {
// (primeFactors(7775460),"(2**2)(3**3)(5)(7)(11**2)(17)")
//   });
// });
