// Sorry for using naive O(n) arrays instead of O(log n) heaps,
// but right now my goal is to create the simplest version,
// not the most efficent XD

class PriorityQueue<T> {
  queue: {
    value: T;
    key: number;
  }[];

  constructor() {
    this.queue = [];
  }

  insert(arg: T, key: number) {
    let i = 0;
    for (i = 0; i < this.queue.length; i++) {
      if (this.queue[i].key > key) {
        break;
      }
    }

    this.queue.splice(i, 0, {
      value: arg,
      key,
    });
  }

  changePriority() {}
  remove() {}

  pop() {
    return this.isEmpty() ? this.queue.splice(-1)[0] : false;
  }

  minimum() {
    return this.isEmpty() ? this.queue.slice(-1)[0] : false;
  }

  isEmpty() {
    return this.queue.length ? true : false;
  }

  size() {
    return this.queue.length;
  }

  toString() {
    return "PriorityQueue";
  }
}

export default PriorityQueue;
