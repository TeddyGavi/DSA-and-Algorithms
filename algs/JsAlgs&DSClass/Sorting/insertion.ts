const arr1 = [29, 12, 10, 14, 30, 37, 18];
const arr2 = [5, 3, 4, 1, 2];

const swap = (arr, idx1, idx2) => {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};

const insertion = (arr: any[]): any[] => {
  // if (arr[0] > arr[1]) swap(arr, 0, 1);
  // for (let i = 1; i < arr.length; i++) {
  //   // let second = i;
  //   for (let j = i - 1; j >= 0; j--) {
  //     if (arr[i] < arr[j]) {
  //       // console.log(arr[i], arr[j]);

  //     } else if (arr[i] > arr[j]){
  //       console.log(arr[i], "insert here", j);
  //     }

  //     // console.log(arr);
  //   }
  // }
  let current;
  // let idx;
  for (let i = 1; i < arr.length; i++) {
    current = arr[i];
    // must start looping on sorted portion
    let j = i - 1;
    for (j; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = current;
    console.log(arr);
  }

  return arr;
};

console.log(insertion(arr2));
