# Multiple Pointers

- creating pointers or values that correspond to an index or position and move towards the beginning or end or middle based on a condition
- stored as a reference, or variable
- can be very efficient

### sumZero

- Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair were the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

-

```js
sumZero([-3, -2, -1, 0, 2, 3]); // [-3,3]
sumZero([-2, 0, 1, 3]); //undefined
sumZero([1, 2, 3]); // undefined
```

- [example](../../algs/sumZero.ts)

### countUniqueValues

- write a function called countUniqueValues, which accepts a sorted array, and counts the unique values n the array. There can be negative numbers but it will always be sorted.

-

```js
countUniqueValues = [1, 1, 1, 1, 1, 1, 1, 2]; // 2
countUniqueValues = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]; // 7
countUniqueValues = []; // 0
countUniqueValues = [-2, -1, -1, 0, 1]; // 4
```
