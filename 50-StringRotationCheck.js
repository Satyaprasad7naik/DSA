function isRotation(s1, s2) {
  if (s1.length !== s2.length) return false;

  let combined = s1 + s1;

  return combined.includes(s2);
}


example:: 

console.log(isRotation("abcd", "cdab"));
// true

console.log(isRotation("hello", "lohel"));
// true

console.log(isRotation("abc", "acb"));
// false

console.log(isRotation("a", "a"));
// true
