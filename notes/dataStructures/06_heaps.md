# Heaps

- Heaps are a tree!
- Many different types of heaps
- Focus on Binary heaps, specifically min and max heaps
- always take up the least amount of space possible
- **left** child is filled first
- no implied ordering between siblings
- used to implement priority queue!

## Max Binary Heap

- parent nodes are always larger than the children
- root is largest!

## Min Binary Heap

- Parent nodes are always smaller than children
- root is the smallest!

### Insert into Max

- only place for it to go is at the end! but we need to **bubble up!** we swap until it finds it corrects spot
  steps

1. push the value to insert into the values array
2. bubble up

- var to hold index (this.values.length -1)
- create a parentIndex which is floor of (index -1)/2
- loop as long as the values element at the parent Index is less than the values element at the child index
  - swap the value of values element at the parent index with the value of the element property at the child index
  - set the index to be the parent index and start over

### Remove the max!

- aka. Extract max
- the procedure for deleting the root from the heap, effectively extracting the max element or min element (depending on max/min heap) and restoring the properties is called down-heap
- bubble-down, percolate-down, sift-down, trickle down, heapify-down, cascade-down
  swap the last value with the root, then compare the left and right children with the new "root", swap if needed!
