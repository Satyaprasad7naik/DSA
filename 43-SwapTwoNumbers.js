function swapNumbers(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;

  return { a, b };
}




console.log(swapNumbers(5, 10)); 
// { a: 10, b: 5 }

console.log(swapNumbers(-3, 7));
// { a: 7, b: -3 }
