# Sliding Window

- involves creating a window which can either be an array or a number from one position to another
- depending on condition the window either increases or closes (and a new one is created)
- useful for keeping track of a subset of data in an array/string

### longestUniqueSubsequence

- "hellothere"
- "heloth"

### maxSubarraySum

- accepts an array on integers and a number n, the function should calculate the maximum sum of n consecutive elements in the array

```js
maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); //10
maxSubarraySum([4, 2, 1, 6], 1); // 6
maxSubarraySum([], 4); //null;
maxSubarraySum([4, 2, 1, 6, 2], 4); // 13
```
