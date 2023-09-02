// Easy way is using an array!

class MaxBinaryHeap {
  values: number[];

  constructor() {
    this.values = [];
  }
  /**
   * @abstract swaps two values at the provided indexes of the heap
   * @param {number} firstIdx
   * @param {number} secondIdx
   */

  private swap(firstIdx: number, secondIdx: number) {
    [this.values[firstIdx], this.values[secondIdx]] = [
      this.values[secondIdx],
      this.values[firstIdx],
    ];
  }
  /**
   * @param {number} index is the child index
   * @abstract Takes in the index of a child and returns the index of that parent element
   * @returns {number} Parent Index
   */

  private findParentIdx(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  /**
   *
   * @param {number} index Index of parent
   * @returns {number} index of the left child
   */

  private leftChild(index: number): number {
    return 2 * index + 1;
  }

  /**
   * @param {number} index Index of parent
   * @returns {number} index of right child!
   */

  private rightChild(index: number): number {
    return 2 * index + 2;
  }

  /**
   * @abstract We need to compare each parent to see if we need to swap to maintain the proper order, bubble up is called whenever a value is added to the heap and the length is greater than 0
   */

  private bubbleUp() {
    let index = this.values.length - 1;
    let parentIdx = this.findParentIdx(index);
    while (this.values[parentIdx] < this.values[index] && parentIdx >= 0) {
      this.swap(parentIdx, index);
      index = parentIdx;
      parentIdx = this.findParentIdx(index);
    }
  }

  insert(val: number) {
    this.values.push(val);
    this.values.length === 1 ? this.values : this.bubbleUp();
  }

  extractMax(): number {
    if (this.values.length === 0) return null;
    this.swap(0, this.values.length - 1);
    const oldRoot = this.values.pop();
    let parentIdx = 0;
    if (this.values.length > 0) {
      const element = this.values[0];
      const length = this.values.length;
      // eslint-disable-next-line no-constant-condition
      while (true) {
        const leftChild = this.leftChild(parentIdx);
        const rightChild = this.rightChild(parentIdx);
        let swap = null;
        let left: number, right: number;
        if (leftChild < length) {
          left = this.values[leftChild];
          if (left > element) {
            swap = leftChild;
          }
        }

        if (rightChild < length) {
          right = this.values[rightChild];
          if (
            (swap === null && right > element) ||
            (swap !== null && right > left)
          ) {
            swap = rightChild;
          }
        }

        if (swap === null) break;
        this.swap(parentIdx, swap);
        parentIdx = swap;
      }
    }

    return oldRoot;
  }
}

// const maxheap = new MaxBinaryHeap();
// maxheap.insert(100);
// maxheap.insert(10);
// maxheap.insert(9);
// maxheap.insert(1);
// maxheap.insert(200);
const heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
console.log(heap);
heap.insert(55);
console.log(heap);
console.log(heap.extractMax());
console.log(heap);

console.log(heap.extractMax());
console.log(heap);
