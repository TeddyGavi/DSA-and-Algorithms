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

  print() {
    if (this.length === 0) return `nothing to print`;
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
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

  unshift(val: number | string) {
    const node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index: number): Node {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length) return this.tail;
    let count = 0;
    let current = this.head;
    while (current.next) {
      if (count === index) {
        return current;
      }
      count++;
      current = current.next;
    }
  }

  set(index: number, val: number | string) {
    let node = this.get(index);
    if (!node) return false;
    node.val = val;
    return true;
  }

  insert(index: number, val: string | number) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      this.push(val);
      return true;
    }
    if (index === 0) {
      this.unshift(val);
      return true;
    }

    let insertNode = new Node(val);
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;
    prevNode.next = insertNode;
    insertNode.next = nextNode;
    this.length++;
    return true;
  }

  remove(index: number) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) {
      return this.pop();
    }

    if (index === 0) {
      return this.shift();
    }
    let removed = this.get(index);
    let prevNode = this.get(index - 1);
    prevNode.next = removed.next;
    removed.next = null;
    this.length--;
    return removed;
  }

  reverse() {
    if (this.head === null) return;

    let current = this.head;
    let prev = null;
    let next = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      next = null;
    }
    this.head = prev;
    return this;
  }
}

const list = new SingleLinkedList();
// console.log(list);
list.push(1);
// console.log(list);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
// console.log(list);
list.push("END");
// console.log(list);
// console.log(list.pop());
// list.push("END");
// console.log(list.shift());
// console.log(list);
// list.unshift(7);
// console.log(list);
// console.log(list.get(0), 7);
// console.log(list.get(10), undefined);
// console.log(list.get(3), "END");
// console.log(list.get(-1), undefined);
// console.log(list.set(0, 8));
// console.log(list);
// console.log(list.set(100, 1));

// console.log(list.insert(1, 1));
// console.log(list);
// console.log(list.insert(0, "here"));
// console.log(list);

list.print();
// list.remove(0)
// list.remove(5)
// list.print()
list.reverse();
list.print();
