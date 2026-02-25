function majorityElement(arr) {
  let frequency = {};
  let n = arr.length;

  for (let num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;

    if (frequency[num] > n / 2) {
      return num;
    }
  }

  return null; // just for safety
}


console.log(majorityElement([2, 2, 1, 2, 3, 2, 2]));
// 2

console.log(majorityElement([1, 1, 1, 2, 3]));
// 1
