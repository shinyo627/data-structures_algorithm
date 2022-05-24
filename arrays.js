// Array - collection of data that stores data in sequence manner
const strings = ['a', 'b', 'c', 'd'];
// we are taking 4*4 = 16 bytes of storage with string array.
//4 byte 32 bits

//push
strings.push('e'); // is 0(1) in time complexity BUT can be 0(n) if Dynamic array

// pop
strings.pop();
strings.pop(); // 0(1)

// *** INSERTION ***
// unshift - 0(n)
strings.unshift('x');

// splice - 0(n/2) but still 0(n) depends on how it operated
strings.splice(2, 0, 'alien');

// delete - 0(n)
console.log(strings);

// STATIC vs Dynamic in Array
// -Dynamic array copies the original array and adds data to the copied array.
// While copying the array, it traverses. therefore, o(n)

// Example of Static array in C++
// int a[20];
// int b[5] {1,2,3,4,5};
