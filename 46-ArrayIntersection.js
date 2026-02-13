function arrayIntersection(arr1, arr2) {
  let set1 = new Set(arr1);
  let result = [];
  let added = new Set();

  for (let num of arr2) {
    if (set1.has(num) && !added.has(num)) {
      result.push(num);
      added.add(num);
    }
  }

  return result;
}


Example output : 
console.log(arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6]));
// [3, 4]

console.log(arrayIntersection([1, 2, 2, 3], [2, 2]));
// [2]

console.log(arrayIntersection([5, 6], [1, 2, 3]));
// []

console.log(arrayIntersection([], [1, 2]));
// []
