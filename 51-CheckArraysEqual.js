[1, 2, 3]      and      [3, 2, 1]      → true
[1, 2, 2, 3]   and      [1, 2, 3, 3]   → false


function checkArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let frequency = {};

  for (let num of arr1) {
    frequency[num] = (frequency[num] || 0) + 1;
  }

  for (let num of arr2) {
    if (!frequency[num]) return false;
    frequency[num]--;
  }

  return true;
}



example  : 
console.log(checkArraysEqual([1, 2, 3], [3, 2, 1]));
// true

console.log(checkArraysEqual([1, 2, 2, 3], [1, 2, 3, 3]));
// false

console.log(checkArraysEqual([], []));
// true
