class Node {
  value: number | string;
  left: null | Node;
  right: null | Node;

  constructor(val: number | string) {
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

  private preTraverse(current: Node | null) {
    if (!current) return;
    console.log(current);
    this.preTraverse(current.right);
    this.preTraverse(current.left);
  }

  print() {
    this.preTraverse(this.root);
  }

  insert(val: number | string) {
    const insert = new Node(val);
    if (!this.root) {
      this.root = insert;
      return;
    }
    const check = (current: Node) => {
      if (current.value === val) return "Multiple detected, not allowed";
      if (current.value < val) {
        if (current.right) {
          return check(current.right);
        } else {
          current.right = insert;
          return;
        }
      } else {
        if (current.left) {
          return check(current.left);
        } else {
          current.left = insert;
          return;
        }
      }
    };
    return check(this.root);
  }

  find(val: number | string) {
    if (!this.root) {
      return null;
    }
    let current = this.root;
    while (current) {
      if (current.value === val) {
        return true;
      }
      if (current.value < val) {
        if (!current.right) {
          return false;
        }
        current = current.right;
      } else {
        if (!current.left) {
          return false;
        }
        current = current.left;
      }
    }
  }

  BFS() {
    const q: Node[] = [];
    const values: (number | string)[] = [];
    let current: Node | null;
    q.push(this.root);
    while (q.length !== 0) {
      current = q.shift();
      values.push(current.value);
      if (current.left) {
        q.push(current.left);
      }
      if (current.right) {
        q.push(current.right);
      }
    }
    return values;
  }

  preOrder() {
    const values: (string | number)[] = [];
    const current = this.root;
    if (!current) return null;
    const traverse = (currentNode: Node) => {
      values.push(currentNode.value);
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
    };

    traverse(current);
    return values;
  }
  postOrder() {
    const values: (string | number)[] = [];
    const current = this.root;
    if (!current) return null;
    const traverse = (currentNode: Node) => {
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
      values.push(currentNode.value);
    };

    traverse(current);
    return values;
  }
}

const testBst = new BST();
testBst.insert(10);
testBst.insert(6);
testBst.insert(8);
testBst.insert(3);
testBst.insert(15);
testBst.insert(20);
console.log(testBst);
testBst.print();
console.log(testBst.find(100));
console.log(testBst.find(15));
console.log(testBst.find(1));
console.log(testBst.BFS(), [10, 6, 15, 3, 8, 20]);
console.log(testBst.preOrder());
console.log(testBst.postOrder());
