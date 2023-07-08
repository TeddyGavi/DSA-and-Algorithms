# Doubly Linked List

## What is it?

- All that we do is add another pointer,
- Each node has a pointer to the next node and the previous node
- This makes a huge difference in some of the methods
- Take more memory!

- Need to make sure that you keep track of the next and prev of each node
- push! Add at end

## Big O

- Insertion O(1) constant
- Removal O(1) constant
  - Do not have to transverse the entire list
- Searching O(n)
  - Searching is still the same even though we start by dividing the length by 2
- Access O(n)

## Summary

- DLL are almost always identical to SLL except the addition of connections to the previous nodes
- DLL are browser history!
- Extra pointer takes up more memory
