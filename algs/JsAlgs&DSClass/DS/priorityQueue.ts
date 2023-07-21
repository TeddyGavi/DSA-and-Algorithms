class Node {
  val: number | null;
  priority: number | null;
  constructor(val = null, priority = null) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  values: Node[] | null;

  constructor() {
    this.values = null;
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
  bubbleUp() {
    let index = this.values.length - 1;
    let parentIdx = Math.floor((index - 1) / 2);

    while (this.values[parentIdx].priority < this.values[index].priority) {
      this.swap(parentIdx, index);
      index = parentIdx;
      parentIdx = Math.floor((index - 1) / 2);
    }
  }

  insert(val: number, priority: number) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
}

const q = new PriorityQueue();
console.log(q);
