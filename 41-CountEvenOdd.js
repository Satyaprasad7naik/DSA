function countEvenOdd(arr) {
  let evenCount = 0;
  let oddCount = 0;

  for (let num of arr) {
    if (num % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  return {
    even: evenCount,
    odd: oddCount
  };
}



Example Test Cases
console.log(countEvenOdd([1, 2, 3, 4, 5]));
// { even: 2, odd: 3 }

console.log(countEvenOdd([2, 4, 6]));
// { even: 3, odd: 0 }

console.log(countEvenOdd([]));
// { even: 0, odd: 0 }
