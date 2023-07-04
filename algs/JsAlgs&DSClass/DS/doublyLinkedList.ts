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
}
