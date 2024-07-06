function getMaximumEatenDishCount(N, D, K) {
  class Node {
    value;
    next;

    constructor(v) {
      this.value = v;
    }
  }

  class Queue {
    head;
    rear;
    size = 0;

    constructor(node) {
      this.head = node || null;
    }

    enqueue(value) {
      const node = new Node(value);

      if (!this.head) {
        this.head = node;
        this.rear = this.head;
      } else {
        this.rear.next = node;
        this.rear = node;
      }

      this.size += 1;
    }

    dequeue() {
      const elem = this.head;
      this.head = this.head.next;
      this.size -= 1;
      return elem.value;
    }
  }

  const queue = new Queue();
  const inQueue = {};
  let eaten = 0;
  let dequeuedElem;

  D.forEach((dish) => {
    if (queue.size > K) {
      dequeuedElem = queue.dequeue();
      inQueue[dequeuedElem] = null;
    }

    if (!inQueue[dish]) {
      eaten++;
      inQueue[dish] = true;

      queue.enqueue(dish);
    }
  });

  return eaten;
}

const res = getMaximumEatenDishCount(6, [1, 2, 3, 3, 2, 1], 1);
console.log('res: ', res);
