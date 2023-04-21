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
-

### Selection sort

- [Selection Sort](../algs/JsAlgs%26DSClass/Sorting/selection.ts)
- similar to bubble sort, it places the small values in the array first
- sorted data is accumulating at the end

### Insertion sort

- [Insertion Sort](../algs/JsAlgs%26DSClass/Sorting/insertion.ts)
