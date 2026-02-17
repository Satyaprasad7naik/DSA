function findMissingNumber(arr, n) {
  let expectedSum = (n * (n + 1)) / 2;

  let actualSum = 0;
  for (let num of arr) {
    actualSum += num;
  }

  return expectedSum - actualSum;
}


example : 
console.log(findMissingNumber([1, 2, 4, 5], 5));
// 3

console.log(findMissingNumber([2, 3, 1, 5], 5));
// 4

console.log(findMissingNumber([1], 2));
// 2





Expected Sum = n × (n + 1) / 2
Missing Number = Expected Sum - Actual Sum
