class LinkedListNode {
  value;
  next;

  constructor(value) {
    this.value = value;
  }

  add(node) {
    if (this.next) {
      this.next.add(node);
    } else {
      this.next = node;
    }
  }

  getList() {
    if (!this.next) return this.value.toString();
    return `${this.value.toString()} ${this.next.getList()}`;
  }

  remove(index, parent) {
    if (index <= 0) {
      if (parent) parent.next = this.next;
      this.next = undefined;
      return this;
    }

    if (this.next) {
      return this.next.remove(index - 1, this);
    }

    return undefined;
  }
}

const root = new LinkedListNode('A');
const nodeB = new LinkedListNode('B');
root.add(nodeB);
console.log(root.getList()); // 'A B'
const nodeC = new LinkedListNode('C');
const nodeD = new LinkedListNode('D');
const nodeE = new LinkedListNode('E');
root.add(nodeC);
root.add(nodeD);
root.add(nodeE);
console.log(root.getList()); // 'A B C D E'
root.remove(1);
console.log(root.getList()); // 'A C D E'
