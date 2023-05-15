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
- otherwise set the next property n the tail to be the new node and set the tail property ont he list to be the newly created node
- increment length by one
