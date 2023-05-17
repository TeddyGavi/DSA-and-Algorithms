// Singly linked lists are made up of nodes

class Node {
  val: number | string;
  next: null | Node;

  constructor(val: number | string) {
    this.val = val;
    this.next = null;
  }
}

//  contains a head, tail and length property

class SingleLinkedList {
  head: null | Node;
  tail: null | Node;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val: number | string) {
    const node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.head === null) return undefined;
    let current = this.head;
    let last: Node;

    while (current.next) {
      last = current;
      current = current.next;
    }
    this.tail = last;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }
    return current;
  }

  shift(): Node {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }
    return current;
  }

  unshift(val: number) {
    const node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    }
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }
}

const list = new SingleLinkedList();
// console.log(list);
list.push(1);
// console.log(list);
list.push(2);
// console.log(list);
list.push("END");
console.log(list);
console.log(list.pop());
list.push("END");
console.log(list.shift());
console.log(list);
list.unshift(7)
console.log(list)
