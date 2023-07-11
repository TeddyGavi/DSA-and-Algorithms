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

## Big O

- Insertion O(log n)
- Searching O(log n)
  not guaranteed however!
  as the number of nodes doubles we only increase the number of steps by 1
  a valid tree that only contains one side (ie only values bigger than the root) this is O(n), not a good way to store this type of data!
