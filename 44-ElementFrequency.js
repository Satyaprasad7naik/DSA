function elementFrequency(arr) {
  let frequency = {};

  for (let num of arr) {
    if (frequency[num]) {
      frequency[num]++;
    } else {
      frequency[num] = 1;
    }
  }

  return frequency;
}

 example :
console.log(elementFrequency([1, 2, 2, 3, 3, 3]));
// { 1: 1, 2: 2, 3: 3 }

console.log(elementFrequency(["a", "b", "a"]));
// { a: 2, b: 1 }

console.log(elementFrequency([]));
// {}
