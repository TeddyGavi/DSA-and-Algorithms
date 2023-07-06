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
    this.head = toRemove.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
      this.head = null;
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
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.head;
    if (index === this.length) return this.tail;

    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        return current;
      } else {
        current = current.next;
        count++;
      }
    }
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
      this.push(val);
      return true;
    }
    if (index === 0) {
      this.unShift(val);
      return true;
    }

    const insertNode = new NodeDLL(val);
  }

  remove() {}
}

const dll = new DLL();
dll.push(1);
dll.push(2);
dll.push(3);
dll.push(4);
dll.push(5);
// dll.print();
// dll.pop();
dll.print();
dll.shift();
dll.print();
dll.unShift(1);
dll.print();
console.log(dll.get(1));
console.log(dll.get(3));
console.log(dll.get(5));
