function secondSmallest(arr) {
  if (arr.length < 2) return null;

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let num of arr) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num > smallest && num < secondSmallest) {
      secondSmallest = num;
    }
  }

  return secondSmallest === Infinity ? null : secondSmallest;
}



🧪 Example Test Cases:
console.log(secondSmallest([5, 3, 9, 1, 7]));
// 3

console.log(secondSmallest([1, 1, 1]));
// null

console.log(secondSmallest([10]));
// null

console.log(secondSmallest([-5, -1, -3]));
// -3
