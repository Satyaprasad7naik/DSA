function findSmallest(arr) {
  if (arr.length === 0) return null;

  let smallest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return smallest;
}

Example Test Cases : - 
console.log(findSmallest([5, 3, 9, 1, 7])); // 1
console.log(findSmallest([10]));           // 10
console.log(findSmallest([]));             // null
console.log(findSmallest([-2, -5, 0]));    // -5
