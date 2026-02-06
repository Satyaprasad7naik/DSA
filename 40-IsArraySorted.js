function isArraySorted(arr) {
  // An empty array or single element array is always sorted
  if (arr.length <= 1) return true;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }

  return true;
}



🧪 Example Test Cases
console.log(isArraySorted([1, 2, 3, 4, 5])); // true
console.log(isArraySorted([1, 3, 2, 4]));   // false
console.log(isArraySorted([5]));           // true
console.log(isArraySorted([]));            // true
console.log(isArraySorted([2, 2, 3, 3]));   // true
