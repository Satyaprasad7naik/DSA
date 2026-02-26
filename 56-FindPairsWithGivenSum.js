function findPairsWithGivenSum(arr, target) {
  let seen = new Set();
  let result = [];

  for (let num of arr) {
    let needed = target - num;

    if (seen.has(needed)) {
      result.push([needed, num]);
    }

    seen.add(num);
  }

  return result;
}


Example Test Cases
console.log(findPairsWithGivenSum([1, 2, 3, 4, 5], 5));
// [ [1, 4], [2, 3] ]

console.log(findPairsWithGivenSum([2, 4, 3, 5, 7], 9));
// [ [4, 5], [2, 7] ]

console.log(findPairsWithGivenSum([1, 1, 1], 2));
// [ [1, 1], [1, 1] ]
