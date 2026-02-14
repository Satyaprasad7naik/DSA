 Right Rotation by One :
How It Actually Works (Simple Explanation)
Think of the array like a line of people.
In right rotation, the last person comes to the front, and everyone else moves one step to the right.
Step-by-step:
If the array is empty, there’s nothing to rotate → just return it.
Save the last element because it will move to the front.
Shift every element one position to the right.
Finally, place the saved element at index 0.
That’s it.
  
CODE :: 
function rotateRightByOne(arr) 
{
  if (arr.length === 0) return arr;
  let last = arr[arr.length - 1];
  for (let i = arr.length - 1; i > 0; i--) 
  {
    arr[i] = arr[i - 1];
  }
  arr[0] = last;

  return arr;
}




    Left Rotation by One ::
How It Actually Works (Simple Explanation)
Now imagine the first person in line goes to the end, and everyone else shifts one step to the left.
Step-by-step:
If the array is empty, return it.
Save the first element.
Shift every element one position to the left.
Put the saved element at the last position.
Simple movement. No extra array needed.

CODE :: 
function rotateLeftByOne(arr) 
{
  if (arr.length === 0) return arr;
  let first = arr[0];
  for (let i = 0; i < arr.length - 1; i++) 
  {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = first;
  return arr;
}





🧪 Example Test Cases :: 
console.log(rotateRightByOne([1, 2, 3, 4]));
// [4, 1, 2, 3]
console.log(rotateLeftByOne([1, 2, 3, 4]));
// [2, 3, 4, 1]
console.log(rotateRightByOne([]));
// []


⏱ Time & Space Complexity
Time: O(n) → we touch each element once
Space: O(1) → no extra array used
If you want, next I can:
