/* Given 2 arrays, create a function that 
let's a user know(true/false) whether these two arrays contain any common 
items
For Example:
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i']
should return false.
-----------------------------------------
const array 1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 'x']
should return true.*/

// ask about how big the array of inputs will be
// 2 parameters -- no size limit
// return true or false

// const obj = { 1: '1', 2: '2' };

// console.log(Array.isArray(obj));

// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];

function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }

  return false;
}

// 0(a*b) arr1 and arr2 sizes can be variable.
// 0(n^2) if arr 1 and arr2 sizes were the same.
// 0(1) - Space Complexity

// console.log(containsCommonItem(array1, array2));

//*** Usage of hastable to turn 0(a*b) time complexity better ***
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];

// 방법 기획:
/* array1 ===> obj {
  a: true,
  b: true,
  c: true,
  x: true
}

array2[index] === obj.properties
*/
function containsCommonItem2(arr1, arr2) {
  //Can we assume always 2 params?

  // 1. loop through first arr and create object
  // where properties === items in the array
  const map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }

  console.log(map);
  // 2. loop through second array and check if item in second array
  // exists on created object
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return map[arr2[j]];
    }
  }

  return false;
}
// above executes just two loops
// instead of nesting === 0( a + b) Time Complexity
// 0(a) Space Complexity

console.log(containsCommonItem2(array1, array2));

function containsCommonItem3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}
