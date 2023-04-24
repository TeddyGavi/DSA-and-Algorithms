# Intermediate Sorting Algorithms

- much more difficult! don't be scared
- Make sure to understand the limitations we have learned so far
- These are much faster!
- the ones we have learned so far don't scale well,
- if you try bubble sort on 100,000 it takes quite a while!
  - not ideal!
- generally these improve the time complexity to O(n log n) from O(n^2)
-

### Merge Sort

- [Merge Sort](../algs/JsAlgs%26DSClass/Sorting/merge.ts)
- combination of two things, merging and sorting!
- exploits the fact that arrays of 0 or 1 elements are always sorted
- divide the larger array into smaller arrays then build up the new sorted array
- How do we merge?
- given two arrays which are sorted, this helper should create a new array which is also sorted
- this should run in O(n + m) space, and should not modify the parameters passed into it

  - Create an empty array, take a look at the smallest values in each input array
  - j and i start at 0
  - while there are still values we haven't looked at
    - compare the values of the first array to the second array
      - if the value if smaller than push the value into the first array
      - otherwise, push the value of the second array into the results array

- now we have the merge function
- break the array into two halves with `array.slice(0, half!)`
- keep going recursively and send each half into merge
- once the arr.length is 1 then we return th merged array

### Quick Sort

- [Quick Sort](../algs/JsAlgs%26DSClass/Sorting/quick.ts)

### Radix Sort

-
