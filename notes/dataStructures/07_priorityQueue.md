# What is a Priority Queue

- abstract structure, not the same as a heap! can be implemented in many different ways
- a data structure where each element has a priority, elements with higher priorities are served before elements with lower priorities
- could use an array or list
- when items come in they are also given a priority number
- each time a element needs to be served you iterate over the entire list and return the highest priority
- use a heap!

## Pseudo Code

- almost the same as a heap
- we need a node stored in an array, each node has an element and a priority

```js
Class Node  {
  constructor(val, priority) {
    this.val = val
    this.priority = priority
  }
}

Class PriorityQue {
  constructor() {
    this.val = []
  }
}
```

- Write a Min Binary Heap
- Each node has a val and a priority use the priority to build the heap
- enqueue methods accepts a value and a priority makes a new node and puts it in the right spot
- dequeue method removes root element, returns it and rearranges heap using priority

## Big O

- regarding insert of enqueue
- O (log N)
- as O approaches infinite the time grows much slower than linear
- as we move down the tree structure we have exponentially more
- for 16 elements we ave 4 comparisons
- 2 to what power gives us 16!
- every time we double the number of nodes, we only increase the time it takes by 1!
- searching isn't great! there is no implied order between nodes so searching is O(n)
