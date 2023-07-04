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

  shift() {}

  unShift() {}

  get() {}

  set() {}

  insert() {}

  remove() {}
}

const dll = new DLL();
dll.push(1);
dll.push(2);
dll.push(3);
dll.push(4);
dll.push(5);
dll.print();
dll.pop();
dll.print();
