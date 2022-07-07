// Every language has built-in hash table just like array.
// In python === dictionary, js has objects, java has maps, ruby has hashes

// Very important subject in Computer science
// You may find the hash table in db, in caches EXTREMELY USEFUL

// *** What it means?

// *** Hash function?
//A: Hash function allows searching for the value that user seeks by using key-string
// A: Also, allows where to store data(key-value pair ) in memory address.

// md5 hash generator
// It outputs one way **idempotent**
// it generates hashed data and converts it into memory space(address space)

// Generally Hash functions compute very fast in a optimal way. === 0(N)
// But there are different kinds of Hash functions that takes longer than others e.g: SHA-256

// Procedure of hashing in data structure
// 1) you get a key to send it to Hash function
// 2) Hash function converts the key to hashed data and map it into memory address where we want to store memory data.

// -------------------------------------------------------------
// insert === 0(1) ** unordered
// lookup === 0(1) ** can be 0(n) depends on hash function
// delete === 0(1)
// search === 0(1)

let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: function () {
    console.log('ahhhh!');
  },
};

console.log(user.age); // 0(1)
user.spell = 'abra kadabra'; // 0(1)
console.log(user);
user.scream(); // 0(1)
// ----------------------------------------------------------------------

// PROS AND CONS OF HASH TABLE

// Collision
// With Hash table you cannot avoid this thing called Hash table collision
// With enough data, with limited memory, We will always have this collision,
// * When you have a collision, it slows down reading, and writing === 0(n /k) K is size of the hash table. Basically 0(n)

// Generally, Collision isn't something web developer should concern but There are few solutions for this.

// Key value is always string and other data type auto converted to string(stringify)

// In ES6 javascript has Map and
const a = new Map();
// Benefits of Map:
// allows you to save any data type as key whereas in js objects, you can only store string as key
//  maintains insertion order

// Set
// Benefits = only stores keys no values

// ---------------------------------------------------------
class HashTable {
  constructor(size) {
    this.data = new Array(size);
    // ['grapes', 10000]
  }

  // Generate hash for us
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  // set(...args) {
  //   let wrapper = [];
  //   let thisDataIndex = 0;

  //   for (let i = 0; i < args.length; i++) {
  //     if (args[i]) {
  //       wrapper.push(args[i], args[i + 1]);
  //       this.data[thisDataIndex] = wrapper;

  //       i += 2;
  //       thisDataIndex++;
  //       wrapper = [];
  //     } else {
  //       break;
  //     }
  //   }

  //   return;
  // }

  set(key, value) {
    let address = this._hash(key);

    if (!this.data[address]) {
      this.data[address] = [];
    }
    // Always pushing key and value
    this.data[address].push([key, value]);
    return this.data;
  } // 0(1)

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    console.log('currentBucket', currentBucket);

    if (currentBucket) {
      // loop here because there might be a collision
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) return currentBucket[i][1];
      }
    }

    return undefined;
  } // 0(1)

  keys() {
    // const keysArray = [];
    // for (let i = 0; i < this.data.length; i++) {
    //   if (this.data[i]) {
    //     keysArray.push(this.data[i][0][0]);
    //   }
    // }
    // return keysArray;
  }
}

const myHashTable = new HashTable(50);
// Create set and get methods
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 54);
myHashTable.set('oranges', 2);
console.log(myHashTable.keys());
// console.log(myHashTable.get('grapes'));
// console.log(myHashTable);

// *** WHY HASH TABLE ?
const array = {
  search: '0(n)',
  lookup: '0(1)',
  push: '0(1)',
  insert: '0(n)',
  delete: '0(n)',
};

const hashTable = {
  search: '0(1)',
  lookup: '0(1)',
  insert: '0(1)',
  delete: '0(1)',
};
