# Trees

- What is a Tree?
  A data structure that consists of nodes in **parent / child** relationship

- Each node may point more than one node, or none! Only one root
- Trees are non-linear, multiple pathways through the structure
- a node can only point to a child, nodes can't point to siblings!

**Root** top node of tree
**child** a node directly connected to another node when moving away from the root
**parent** the opposite of a child!
**siblings** a group of nodes with the same parents
**leaf** a node with no children
**edge** the connection between on node and another

## Uses of Trees

- HTML DOM
- Network routing
- Abstract syntax trees
  A way of describing the syntax of a programming language
- AI
  A miny-max tree
  A decision tree
- Folders in an operating system
- JSON

## Binary Trees

- Each node can have at most two children
- A **search tree**
  - sorted in a particular order

## BST

- Given any node on the tree any node that is less than is located on the **left** branch
- any node that is greater is located on the **right** branch
- Searching is very quick, we can use the principle of Binary Search

### Methods

- Insert
  check the root, if the value is less go to left, if value is greater go right
  must check if the nodes exists first

- Find
  Same logic really, we check if the root exists, if it does and the value is less go check the left node, repeat for each side of the tree

## Big O (BST)

- Insertion O(log n)
- Searching O(log n)
  not guaranteed however!
  as the number of nodes doubles we only increase the number of steps by 1
  a valid tree that only contains one side (ie only values bigger than the root) this is O(n), not a good way to store this type of data!

- Traversal (independent of BST)
  How to visit every node one time!

1. Breadth First Search

- Working across, horizontal the tree first, each node "layer"

2. Depth First Search
   Vertical
   1. InOrder
   2. PreOrder
   3. PostOrder

## BFS

- create a queue and a variable to hold the values of nodes
- place the root node in the queue
- dequeue a node from the queue and push the value of the node into the variable that stores the nodes
- if there a left on the current node add it to the queue
- if there if there is a right property on the node add it to the cue
  return the var that stores all the values

## DFS

- visit a node, and explore one entire branch before moving into the next
- PreOrder
  create a var to store the values
  store the root of the tree
  write a helper that accepts a node
  push the value of the node to the value array or list
  check if it has a left, call the helper again
  if it has a right, call the function on the right
- PostOrder
  explore the tree first, then we "visit the node"
  what this means practically is we don't add the value of the node until the recursive calls are done
- inOrder
  traverse the entire left, to depth and visit each left node THEN traverse the right and visit and add each value to result

## Which one is better?

- If we have a full Binary tree, each node has two nodes, and the exact same levels the BFS will end up holding a lot of extra data in memory
- however, if we search in DFS then each branch of the tree is held in the call stack, so at most this will be the depth of the tree, Once those calls are done the memory is freed and the next branch is looked at!
- using InOrder on a Binary search tree, you will end up with the nodes "inOrder!" this could be useful
- using PreOrder could be useful if you are working to reconstruct the tree in the future
