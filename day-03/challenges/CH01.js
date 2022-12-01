class BinaryTreeNode {
  value;
  left;
  right;

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(node) {
    if (node.value < this.value) {
      if (this.left) {
        this.left.add(node);
      } else {
        this.left = node;
      }
    } else {
      if (this.right) {
        this.right.add(node);
      } else {
        this.right = node;
      }
    }
  }
}

const B = new BinaryTreeNode('B');
const A = new BinaryTreeNode('A');
const C = new BinaryTreeNode('C');
const D = new BinaryTreeNode('D');

B.add(A);
B.add(D);
B.add(C);

console.log(B.left);
console.log(B.right);
console.log(D.left);
