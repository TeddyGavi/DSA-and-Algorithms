# Searching

- What is it?
- simply finding a specific item in a list
- Linear Search
- Binary Search (sorted)
- naive searching algorithm
- KMP searching

### Linear Search

- check every value against a given value
- Javascript has this!
  - indexOf
  - includes
  - find
  - findIndex
- but how do they work?
- see [Linear Search](../algs/JsAlgs%26DSClass/Searching/linearSearch.ts)
- O(n)

### Binary Search

- IF the data is sorted, much faster O(log n)
- eliminates half the remaining elements at a time
- a Divide and Conquer technique
- pick the middle as a guess!

- rough pseudocode
  - function accepts a sorted array, and a search value
  - create two vars, one points to start and one point to end
  - while the left pointer comes before the right
    - make a guess!
    - is the guess === value return index
    - if the guess < val move start pointer (min up)
    - if the guess > val move end pointer down
  - not found, return -1
