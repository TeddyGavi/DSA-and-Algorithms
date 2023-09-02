/* Sliding Window - findLongestSubstring
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
Time Complexity - O(n) */

const findLongestSubstring = (str: string): number => {
  // let longest = 0;
  // let seen = {};
  // let start = 0;

  // for (let i = 0; i < str.length; i++) {
  //   let char = str[i];
  //   if (seen[char]) {
  //     start = Math.max(start, seen[char]);
  //     console.log(char, i, start);
  //   }
  //   // index - beginning of substring + 1 (to include current in count)
  //   longest = Math.max(longest, i - start + 1);
  //   // store the index of the next char so as to not double count
  //   seen[char] = i + 1;
  //   console.log(seen, longest);
  // }
  // return longest;

  let length = 0;
  const set = new Set<string>();
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    while (set.has(char)) {
      set.delete(str[start]);
      start = start + 1;
    }
    set.add(char);
    length = Math.max(length, i - start + 1);
    // console.log(set);
  }
  return length;

  // need to do brute force solution
};

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
