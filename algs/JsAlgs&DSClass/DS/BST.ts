class Node {
  value: number | string;
  left: null | Node;
  right: null | Node;

  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  root: null | Node;

  constructor() {
    this.root = null;
  }

  insert(val: number | string) {}

  find() {}
}
