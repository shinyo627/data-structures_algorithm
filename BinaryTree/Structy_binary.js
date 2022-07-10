class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// @@@ Binary tree?
// There's only one root and rest are sub parents nodes - children /child nodes
// Leaves/Leaf nodes don't have children but only one parent.

// @@@ Binary tree has three distinctive qualities;
// - Node can have at most 2 children.
// - Exactly one root node exists in binary tree.
// - Exactly 1 path between root and any children/sub node.
// - !!! if there's only one root node it is still considered binary tree.
// - !!! empty tree still is considered binary tree.

/*       a   < === not binary tree because it has more than one root / path
       /   \       INFINITE NUMBER OF PATHS
      b  -> c 
*/

// @@@ TIP for solving binary tree code challenges:
// Notice the pattern of given information/data structure of the challenge
// Challenges never tell you its binary tree challenge

//@@@ Depth first value / traversal
// use stack === linear
// push to the top move from the top, LIFO
// add your value then leave stack
// n = # of nodes
// Time: 0(n)
// space: 0(n) leanear data structure

// * solve depth first value iteratively
const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
/*       a
        / \ 
      b     c
    /   \     \ 
  d      e      f   */

// Iteration in sequence
//  [c, b] => [c, e, d] => [c, e] => [c] => [f]
const depthFirstValues = (root) => {
  if (root === null) return [];

  const result = [];
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.val);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return result;
};

// depthFirstValues(a)

// * solve depth first value iteratively
const depthFirstValues2 = (root) => {
  if (root === null) return [];
  // Imagine what this functions should return
  const leftValues = depthFirstValues2(root?.left); // [b, d, e]
  const rightValues = depthFirstValues2(root?.right); // [c, f]

  return [root.val, ...leftValues, ...rightValues];
};

// console.log('recursive', depthFirstValues2(a));

// @@@ breadth first values
// should traverse a -> b -> c-> d -> e -> f
// USE OF QUEUES -FIFO
// n = # of nodes
// Time: 0(n)
// space: 0(n)
// Because the problem demands usage of Queues data structure, there's not much of a way of doing it recursively.
// Recursive function actually use Stack under the hood.
const breadthFirstValues = (root) => {
  if (root === null) return [];
  const result = [];
  const queues = [root];

  while (queues.length > 0) {
    const current = queues.shift();
    result.push(current.val);

    if (current.left) queues.push(current.left);
    if (current.right) queues.push(current.right);
  }

  return result;
};

// breadthFirstValues(a)

// @@@ tree-includes
// n = # nodes
// Time = 0(n)
// Space = 0(n)
// Can be done in recursion - Important pattern
// Think of Logical OR ||
// Similar to tree sum
// breadthFirst traversal iteratively
const treeIncludes = (root, target) => {
  if (root === null) return false;

  const queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current.val === target) return true;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return false;
};
// treeIncludes(a, 'z');

// * recursive for tree-includes
const treeIncludes2 = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;

  return treeIncludes2(root.left, target) || treeIncludes2(root.right, target);
};

// treeIncludes2(a, 'z')

// @@@ Tree Sum problem with Binary tree
// Can use both breath/depth first traversal
// * breath
const treeSum = (root) => {
  if (root === null) return 0;
  const queue = [root];
  let sum = 0;
  // I want to loop until queue is not empty
  while (queue.length > 0) {
    const current = queue.shift();
    sum += current.val;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return sum;
};
// * depth traversal
const treeSum2 = (root) => {
  if (root === null) return 0;
  const stack = [root];
  let sum = 0;

  // I want to loop while stack is not empty
  while (stack.length > 0) {
    const current = stack.pop();
    sum += current.val;

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return sum;
};

// * depth traversal in recursion
// TIP- If I try to write elegant recursive code then, try to think about
// the base case as a problem in itself.
// TIP- Think about null node and figure out how parent node computes its given children's answers;
// n = # nodes
// Time = 0(n), Space = 0(n)
const treeSumRecursive = (root) => {
  if (root === null) return 0;
  let sum = 0;
  sum += root.val;

  return (sum += treeSumRecursive(root.left) + treeSumRecursive(root.right));
};

const treeSumRecursive2 = (root) => {
  if (root === null) return 0;
  //        3      +      13 (left)    + 5(right)
  return (
    root.val + treeSumRecursive2(root.left) + treeSumRecursive2(root.right)
  );
};
// treeSum(a);
// treeSum2(a);
// treeSumRecursive(a);
// treeSumRecursive2(a);

// @@@ Tree Minimum value
// use breadth/depth
// need to maintain outer variable to track the current minimum -> then, when you hit every node that is smaller than your current minimum, then replace your minimum -> eventually get truthful minimum and return it.
// * Iterative breadth / depth
// * Breadth - use of queue
const findTreeMin = (root) => {
  if (root === null) return 0;
  const queue = [root];
  // set the first root value before comparison
  let min = Infinity;
  // traverse tree
  while (queue.length > 0) {
    const current = queue.shift(); // 0(n) because we need to shift all the remaining elements' index position
    // store minimum val with condition.
    if (min > current.val) min = current.val;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return min;
};
// findTreeMin(a);
// * Depth - use of stacks
const findTreeMin2 = (root) => {
  if (root === null) return 0;
  const stack = [root];
  let min = Infinity;

  while (stack.length > 0) {
    const current = stack.pop();
    if (current.val < min) min = current.val;

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return min;
};
// findTreeMin2(a)
// * Depth Recursive
// n = # of nodes
// Time: 0(n) , space: 0(n)
const findTreeMinRecursive = (root) => {
  // If there's no nodes return infinity;
  if (root === null) return Infinity;
  let min = root.val;

  const rightMin = findTreeMinRecursive(root.right); // smallest from right subtree
  const leftMin = findTreeMinRecursive(root.left); // smallest from left subtree

  // Conditional doesn't really work IDK
  // if(rightMin < leftMin) {
  // return  min = rightMin;
  // } else{
  //   return min = leftMin;
  // }

  // Works
  // return Math.min(min, rightMin, leftMin)
};
// findTreeMinRecursive(a);

// @@@ Max Root to Leaf Path Sum - find maximums from each path to each sub trees and comparison.
// Think about two different approaches/patterns .... tree sum / findMin tree
// Classic approach would be solving it recursively. - usually best bet when path finding.
// n = # nodes
// Time: 0(n), Space: 0(n)
const maxRootToLeafSum = (root) => {
  if (root === null) return -Infinity;
  if (root.left === null && root.right === null) return root;
  const maxChildPathSum = Math.max(
    maxRootToLeafSum(root.left) + maxRootToLeafSum(root.right)
  );

  return root.val + maxChildPathSum;
};

maxRootToLeafSum(a);
