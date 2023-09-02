/* Takes an array and a value, if found, return index, if not return -1 */
const testArr = [5, 8, 1, 100, 12, 3, 12];

const linearSearch = (arr: Array<any>, value: any): number => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
};
