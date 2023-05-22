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
      - if the value is smaller than push the value into the first array
      - otherwise, push the value of the second array into the results array

- now we have the merge function
- break the array into two halves with `array.slice(0, half!)`
- keep going recursively and send each half into merge
- once the arr.length is 1 then we return the merged array

- O(n log n)
- the number of times we split the array is log n,
- however, the number of times we merge is a O(n) operation
- therefore O (n log n) is the result
- Space complexity grows linear, so its O(n)

### Quick Sort

- [Quick Sort](../algs/JsAlgs%26DSClass/Sorting/quick.ts)
- works on the same assumption of merge, splitting the data until we get to arrays of 0 or 1 items
- selecting a pivot point, and finding the index where the pivot should end up in sorted array
- we now know that one number is in the right spot
- repeat!
- made up of a helper and the main function
- Pivot helper, given an array, the function designates an element as the pivot
- it should re arrange the elements in the array so that all values less than the pivot are moved to the left of the pivot and all values greater than the pivot are moved to the right of the pivot.
- the helper should do this **in place** (mutate)
- once done the helper should return the index of the pivot
- the runtime of quick sort, depends on the pivot index
- roughly the median value
- for simplicity we will chose the first element
  - accepts three arguments, an array, a start index, and the end,
  - pick the pivot from the start and store that in a var
  - loop through the array from start until the end
    - if the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
  - swap the starting element with the pivot index
- recursively call the picot helper on the sub array to the left of the index returned from the pivot, and to the right
- Quick sort is 0(n log n)
- if we had 32 elements we would recurse 5 times
- for each split we need to make O(n) comparisons
- as we are taking the first element the worst case means that the pivot could be the most minimal element causing a O(n ^ 2)
- same thing with maximum, better to pick a random element

### Radix Sort

- [Radix Sort](../algs/JsAlgs%26DSClass/Sorting/radix.ts)

- does not make direct comparisons!
- only works on a list of numbers
- usually with binary
- exploits the fact that information about the size of a number is encoded in the number of digits
- group numbers into buckets
- the buckets are based on the `base` of the number
- ie, in base 10 we have 10 buckets (0..9)
- look at the right most number and group numbers into the buckets based on that number
- form the numbers into a list based on this and continue
- now we are looking at the 3rd digit from the right
- and continue for the longest digit (if 4 digits 4 passes)
- Need some helper methods...
  - `getDigit` need to be able to get a digit at a given position
  - returns the digit in num at a given place
  - `countDigit` returns how many digits
  - `mostDigits` returns a the number of digits in the largest numbers of the list
- Radix sort
  - define a function that accepts a list of numbers
  - figure out how many digits the largest number has
  - loop through up to the largest number of digits
    - each loop
    - create buckets (matrix array)
    - replace previous array with array reformed from buckets (concat)
- outer and inner loop
- return list!
- Big O
  - all unique and randomly distribute data it becomes n Log n
  - equally as good as comparison sorts
  - O(nk) in theory!
  - limitations due to how computers store numbers in memory
