class Node {
  val: number | string | null;
  priority: number | null;
  constructor(val: string | number, priority: number) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  values: Node[];

  constructor() {
    this.values = [];
  }
  /**
   * @abstract swap the entire node!
   */
  private swap(idx1: number, idx2: number) {
    [this.values[idx1], this.values[idx2]] = [
      this.values[idx2],
      this.values[idx1],
    ];
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

  private bubbleUp() {
    let index = this.values.length - 1;
    let parentIdx = Math.floor((index - 1) / 2);
    console.log(this.values[parentIdx]);
    while (
      parentIdx >= 0 &&
      this.values[parentIdx].priority < this.values[index].priority
    ) {
      this.swap(parentIdx, index);
      index = parentIdx;
      parentIdx = Math.floor((index - 1) / 2);
    }
  }

  enqueue(val: number | string, priority: number) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    this.values.length === 1 ? this : this.bubbleUp();
  }

  dequeue(): Node {
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
        let left: Node, right: Node;
        if (leftChild < length) {
          left = this.values[leftChild];
          if (left.priority > element.priority) {
            swap = leftChild;
          }
        }

        if (rightChild < length) {
          right = this.values[rightChild];
          if (
            (swap === null && right.priority > element.priority) ||
            (swap !== null && right.priority > left.priority)
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

const q = new PriorityQueue();
console.log(q);
q.enqueue("cold", 1);
q.enqueue("broken arm", 3);
q.enqueue("concussion", 5);
q.enqueue("glass ct", 2);
q.enqueue("table saw injury", 4);

console.log(q);
q.dequeue();
q.dequeue();
console.log(q);
