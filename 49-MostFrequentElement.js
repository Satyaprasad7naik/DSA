function mostFrequentElement(arr) {
  if (arr.length === 0) return null;

  let frequency = {};
  let maxCount = 0;
  let mostFrequent = null;

  for (let num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;

    if (frequency[num] > maxCount) {
      maxCount = frequency[num];
      mostFrequent = num;
    }
  }

  return mostFrequent;
}


example : 
console.log(mostFrequentElement([1, 3, 2, 3, 4, 3, 2]));
// 3

console.log(mostFrequentElement([5, 5, 5, 1, 2]));
// 5

console.log(mostFrequentElement([]));
// null

