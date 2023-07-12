// Easy way is using an array!

class MaxBinaryHeap {
  values: number[];

  constructor() {
    this.values = [];
  }

  private swap(firstIdx: number, secondIdx: number) {
    [this.values[firstIdx], this.values[secondIdx]] = [
      this.values[secondIdx],
      this.values[firstIdx],
    ];
  }

  private findParentIdx(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private leftChild(index: number): number {
    return 2 * index + 1;
  }
  private rightChild(index: number): number {
    return 2 * index + 2;
  }
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

  remove(): number {
    this.swap(0, this.values.length - 1);
    const oldRoot = this.values.pop();

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
