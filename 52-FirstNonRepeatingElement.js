function firstNonRepeatingElement(arr) {
  let frequency = {};

  // Count frequency
  for (let num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
  }

  // Find first non-repeating
  for (let num of arr) {
    if (frequency[num] === 1) {
      return num;
    }
  }

  return null;
}

example cases  ::
console.log(firstNonRepeatingElement([4, 5, 1, 2, 0, 4]));
// 5

console.log(firstNonRepeatingElement([1, 1, 2, 2]));
// null

console.log(firstNonRepeatingElement([7]));
// 7
