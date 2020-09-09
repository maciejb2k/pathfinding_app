// Sorry for using naive O(n) arrays instead of O(log n) heaps,
// but right now my goal is to create the simplest version,
// not the most efficent XD

class PriorityQueue<T> {
  queue: {
    value: T;
    priority: number;
  }[];

  constructor() {
    this.queue = [];
  }

  insert(value: T, priority: number) {
    let i = 0;

    // Search for duplicates, only unique values
    for (i = 0; i < this.queue.length; i++) {
      if (this.queue[i].value === value) {
        return false;
      }
    }

    i = 0;

    // Search for bigger priority, to insert element to that index
    for (i = 0; i < this.queue.length; i++) {
      if (this.queue[i].priority > priority) {
        break;
      }
    }

    this.queue.splice(i, 0, {
      value,
      priority,
    });

    return true;
  }

  remove(value: T) {
    for (let i = 0; i < this.queue.length; i++) {
      let current = this.queue[i];
      if (current.value === value) {
        this.queue.splice(i, 1);
      }
    }
  }

  changePriority(value: T, newPriority: number) {
    this.remove(value);
    this.insert(value, newPriority);
  }

  pop() {
    return this.isEmpty() ? false : this.queue.shift();
  }

  minimum() {
    return this.isEmpty() ? false : this.queue[0];
  }

  isEmpty() {
    return this.queue.length ? false : true;
  }

  size() {
    return this.queue.length;
  }

  toString() {
    return "PriorityQueue";
  }
}

export default PriorityQueue;
