function moveNegatives(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    if (arr[left] < 0) {
      left++;
    } else if (arr[right] > 0) {
      right--;
    } else {
      // swap
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;

      left++;
      right--;
    }
  }

  return arr;
}


console.log(moveNegatives([1, -2, 3, -4, -1, 4]));
// Example output: [-2, -4, -1, 3, 1, 4]

console.log(moveNegatives([-1, -2, -3]));
// [-1, -2, -3]

console.log(moveNegatives([1, 2, 3]));
// [1, 2, 3]
