/** 
isValidSubsequence
Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.
A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array.
For instance, the numbers  [1, 3, 4  form a subsequence of the array [1, 2, 3, 4] and so do the numbers [2, 4].
Note that a single number in an array and the array itself are both valid
subsequences of the array.

*Sample Input*
array = [5, 1, 22, 25, 6, -1, 8, 10]`
sequence = [1, 6, -1, 10]
*Sample Output*
true

array = [1]; 
seq = [];
true

array = [1,2,3,4]
seq = [1,2,]
true

array = [1,2,3,4]
seq = [1,4,2]
false


loop through array, check if seq is included
  break out if not
otherwise build array of indices
 array is sorted ?
  true
else
  false

*/

const isValidSubsequence = (arr1: number[], seq: number[]): boolean => {
  // const arrIndx = [];
  
  // for (let i = 0; i < seq.length; i ++) {
  //   if (!arr1.includes(seq[i])) {
  //     return false
  //   }
  //   arrIndx.push(arr1.indexOf(seq[i])) 
  // }

  // const sortedArr = [...arrIndx]
  // sortedArr.sort()

  // for (let i = 0; i < arrIndx.length; i++) {
  //   if (arrIndx[i] !== sortedArr[i]) return false
  // }

  // return true

  let count = 0;

  for (let i = 0; i < arr1.length; i ++) {
    if (arr1[i] === seq[count] ) {
      count++
    }
  }

  return count === seq.length
}

console.log(isValidSubsequence([1,2,3,4], [1,4,2]), false) 
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]), true)
console.log(isValidSubsequence([1,2,3,4], [1,2]), true)

