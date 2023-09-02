class NodeDLL {
  val: number | string;
  next: null | NodeDLL;
  prev: null | NodeDLL;

  constructor(val: number | string) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DLL {
  head: null | NodeDLL;
  tail: null | NodeDLL;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  print() {
    if (this.length === 0) return "Nothing to print";
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
  push(val: number | string) {
    const node = new NodeDLL(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    const tail = this.tail;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.length--;
    return tail;
  }

  //remove from beginning
  shift() {
    if (this.length === 0) return undefined;
    let toRemove = this.head;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = toRemove.next;
      toRemove.next = null;
      this.head.prev = null;
      this.length--;
    }

    return toRemove;
  }
  // add to beginning
  unShift(val: number | string) {
    const node = new NodeDLL(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index: number): NodeDLL {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.head;
    if (index === this.length) return this.tail;
    let current: NodeDLL, count: number;
    if (index >= this.length / 2) {
      current = this.tail;
      count = this.length - 1;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    } else {
      current = this.head;
      count = 0;
      while (count !== index) {
        current = current.next;
        count++;
      }
    }
    return current;
  }

  set(val: string | number, index: number): boolean {
    const node = this.get(index);
    if (!node) return false;
    node.val = val;
    return true;
  }

  insert(val: string | number, index: number) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      return !!this.push(val);
    }
    if (index === 0) {
      return !!this.unShift(val);
    }

    const insertNode = new NodeDLL(val);
    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;
    prevNode.next = insertNode;
    nextNode.prev = insertNode;
    insertNode.next = nextNode;
    insertNode.prev = prevNode;

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
    const removed = this.get(index);
    const prevNode = this.get(index - 1);
    const nextNode = removed.next;
    nextNode.prev = prevNode;
    prevNode.next = nextNode;
    removed.next = null;
    removed.prev = null;
    this.length--;
    return removed;
  }
}

const dll = new DLL();
dll.push(1);
dll.push(2);
dll.push(3);
dll.push(4);
dll.push(5);
// console.log(dll.get(100));
// console.log(dll.get(5));
// console.log(dll.get(3));
// console.log(dll.get(1));
// dll.print();
// dll.pop();
dll.print();
// dll.shift();
// dll.print();
// dll.unShift(1);
dll.print();
// console.log(dll.get(1));
// console.log(dll.get(3));
// console.log(dll.get(5));
dll.insert(9, 3);
dll.print();
console.log(dll.remove(3));
console.log(dll.remove(dll.length - 1));

dll.print();
console.log(dll);
