
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  function permutation(n, r) {
    return factorial(n) / factorial(n - r);
  }

  function combination(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
  }
  
  function multiPermutation(n, r) {
    return Math.pow(n, r);
  }
  function multiCombination(n, r) {
    return factorial(n + r - 1) / (factorial(r) * factorial(n - 1));
  }
  
  module.exports = {
    permutation,
    combination,
    multiPermutation,
    multiCombination,
  };
  