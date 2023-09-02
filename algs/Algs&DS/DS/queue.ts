class Node {
  val: string | number;
  next: Node | null;

  constructor(val: number | string) {
    this.val = val;
    this.next = null;
  }
}
/**
 * @class Queue, using a linked list to create a FIFO structure
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Queue {
  first: null | Node;
  last: null | Node;
  size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  /**
   * @method enQueue adds to the ends of the queue and updates the last pointer
   * @returns the size of the new queue
   */
  enQueue(val: string | number): number {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    }
    this.last.next = newNode;
    this.last = newNode;
    return ++this.size;
  }
  /**
   * @method deQueue removes the first node and updates the first to point to original first.next
   * @returns removed item
   */
  deQueue(): Node {
    if (this.size === 0) return null;
    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp;
  }
}
