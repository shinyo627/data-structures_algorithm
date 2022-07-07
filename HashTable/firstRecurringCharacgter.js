// Given an array of elements, find recurring element (duplicate) and return it
// function firstRecurringCharacter(input) {
//   for (let i = 0; i < input.length; i++) {
//     for (let j = i + 1; j < input.length; j++) {
//       if (input[i] === input[j]) {
//         return input[i];
//       }
//     }
//   }

//   return undefined;
// } //0(n^2)

// console.log(firstRecurringCharacter([1, 2, 3, 4, 5, 10, 2]));

function firstRecurringCharacter2(nums) {
  //  store the numbers in hash
  const hash = {};
  let outPut;
  // if same key appears during loop, then
  // return the current element/key in the loop
  nums.forEach((num) => {
    if (!hash[num]) {
      hash[num] = true;
    } else {
      outPut = num;
    }
  });
  // Otherwise, return undefined;
  return outPut;
} // 0(n)

console.log(firstRecurringCharacter2([1, 2, 2, 3]));
