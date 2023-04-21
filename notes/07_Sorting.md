# Sorting

- Elementary Sorting Algorithms
- important and a great challenge, something that is done all the time
- What is sorting?

  - process of rearranging the items in a collection

- many different ways to sort!
- Better and worse depending on situation!
- sorting is incredibly common and its good to know how it works
- classic interview topic
- critical thinking challenge!

### Built in

- every item is converted to a unicode string and the value of that is take as a sort
- you can also use a comparator function which look sat a pair of elements (a and b)
  - if you return a negative number, a comes before b
  - if you return a positive number b comes before a
  - if return 0, nothing done
- [Built in .sort](../algs/JsAlgs%26DSClass/Sorting/builtIn.ts)

### Bubble Sort

- [Bubble Sort](../algs/JsAlgs%26DSClass/Sorting/bubble.ts)
- Its called bubble sort because if we are ordering from smallest to largest the largest values with bubble to the top
- 0(n^2)

### Selection sort

- [Selection Sort](../algs/JsAlgs%26DSClass/Sorting/selection.ts)
- similar to bubble sort, it places the small values in the array first
- sorted data is accumulating at the beginning
  - Loop over array from left to right
  - set the a variable to the lowest (first index seen)
  - loop over again, but comparing the next value to the lowest
  - if it is lower then set the lowest to the current index
    - and SWAP! after the inner loop is done
- O(n^2)
- potentially better than bubble sort, when you want to minimize the number the number of swaps
- if you are worried about writing to memory

### Insertion sort

- [Insertion Sort](../algs/JsAlgs%26DSClass/Sorting/insertion.ts)
- Key differences
- Insertion sort is actually good at some things!
- builds up the sort by gradually creating a larger "section" which is always sorted
- start by picking the second element in the array
- now compare it to the one before, if needed swap
- continue to the next element and if it is not in the incorrect order, iterate through the sorted portion to the pace the element in the correct place
- repeat!
- works well if the data is nearly sorted
- or if the data is coming into a site one piece at a time
