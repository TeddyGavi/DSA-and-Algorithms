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

  find() {}
}

const testBst = new BST();
testBst.insert(10);
testBst.insert(20);
testBst.insert(15);
testBst.insert(5);
testBst.insert(7);
console.log(testBst);
testBst.print();
