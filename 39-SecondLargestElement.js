function secondLargest(arr) {
  if (arr.length < 2) return null;

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      secondLargest = num;
    }
  }

  return secondLargest === -Infinity ? null : secondLargest;
}




🧪 Examples
Input:  [10, 5, 20, 8]
Output: 10

Input:  [3, 3, 3, 2]
Output: 2

Input:  [7]
Output: null
