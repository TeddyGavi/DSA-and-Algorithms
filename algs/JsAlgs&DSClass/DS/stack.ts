// push and pop with an array is a STACK! or unshift and shift
// all we need is the ability to end and remove from the end

class Node {
  val: string | number;
  next: Node | null;

  constructor(val: number | string) {
    this.val = val;
    this.next = null;
  }
}
/**
 * @class Stack, using a linked list to create a LIFO structure
 */

class Stack {
  first: null | Node;
  last: null | Node;
  size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  /**
   * @method push Takes a new value and adds that value to the start of the list
   */

  push(val: string | number) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const currentFirst = this.first;
      this.first = newNode;
      newNode.next = currentFirst;
    }

    this.size++;
    return this.size;
  }
  pop() {}
}
