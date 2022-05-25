// Arrays in JS is just an OBJECT with integers based keys that are index
const arr = [1, 2, 3];

// console.log(Object.keys(arr));
// console.log('values of arr as object...', Object.values(arr));

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;

    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length -= 1;

    return lastItem;
  }

  delete(index) {
    const target = this.data[index];
    this.shiftItems(index);

    return target;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length -= 1;
  }
}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
newArray.push('!');
newArray.delete(0);
newArray.push('are');
newArray.push('nice');
newArray.delete(1);
console.log(newArray);

// Strings are simplye ARRAY OF CHARACTERS

// Q1 Create a function that reverses a string:
// 'Hi My name is Andrei should be reversed.
function reverse(str) {
  if (str.length < 2 || !str || typeof str !== 'string') return;

  const strArr = str.split(' ');
  console.log(strArr);
  return strArr.reverse().join(' ');
}

reverse('Hi My name is Andrei');

function reverse2(str) {
  const reversed = [];
  const length = str.length - 1;

  for (let i = length; i >= 0; i--) {
    reversed.push(str[i]);
  }

  return reversed.join('');
}

// Q2
function mergeSortedArrays(arr1, arr2) {
  // Merge array first
  const merged = arr1.concat(arr2);

  // sort the merged using sort()
  console.log(merged.sort((a, b) => a - b));
}

function mergeSortedArrays2(arr1, arr2) {
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  const merged = [];
  let array1Item = arr1[0];
  let array2Item = arr2[0];
  let i = 1;
  let j = 1;

  while (array1Item || array2Item) {
    console.log(array1Item, array2Item, 'logging');

    if (!array2Item || array1Item < array2Item) {
      merged.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      merged.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
}

// *** TIP === undefined < 5 ---> false
mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);

/* Pros & Cons of using Array
  Pros:
  Fast lookups
  Fast push/pop 
  ordered

  Cons:
  SLow inserts
  Slow deletes
  Fixed size* -- if using static array
*/
