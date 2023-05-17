# Singly Linked List

- Define and compare
- adding methods

## What is it

- An ordered list of data
- there is a BIG difference between arrays
- no indices, but contains a **head, tail and length**
- A linked list contains nodes and each node has a value and a pointer to another node
- random access is not allowed!
- Linked lists are great at insertion, avoids the re-indexing problem of arrays
-

### Methods

- `push` function accepts a value, and creates a new node using the value passed into the function
- if there is no head property on the list, set the head and the tail to the newly created node
- otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
- increment length by one

- `pop` removing the last node
- traverse the list
- while there is a `.next` keep going
- keep track of the second to last node
- assign the tail to the second to last node, and assign the second to last `.next` to null
- return the last node

- `shift` removing the first node
- move the head over to the next value

- `unshift` adding a new node to the beginning

- `get` retrieves a node by its position in the linked list, returns that value

- `set` takes an index, and a val and updates the value at that node(passed in index)

- `insert` takes an index and a val, and inserts a node into that index

- `remove` takes an index and removes the node from that index
