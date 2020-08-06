import Vertex from "algorithms/graph/Vertex";
import PriorityQueue from "algorithms/graph/PriorityQueue";

describe("PriorityQueue", () => {
  it("adds item to queue", () => {
    const queue = new PriorityQueue<Vertex>();
    const vertex_a = new Vertex("A");
    const vertex_b = new Vertex("B");
    const vertex_c = new Vertex("C");
    const vertex_d = new Vertex("D");

    queue.insert(vertex_a, 10);
    queue.insert(vertex_b, 5);
    queue.insert(vertex_c, 11);
    queue.insert(vertex_d, 2);

    expect(queue.queue[0].value.getKey()).toBe("D");
    expect(queue.queue[1].value.getKey()).toBe("B");
    expect(queue.queue[2].value.getKey()).toBe("A");
    expect(queue.queue[3].value.getKey()).toBe("C");

    expect(queue.size()).toBe(4);
  });

  it("adds only unique items", () => {
    const queue = new PriorityQueue<Vertex>();
    const vertex_a = new Vertex("A");

    expect(queue.insert(vertex_a, 10)).toBe(true);
    expect(queue.insert(vertex_a, 12)).toBe(false);
  });

  it("removes item from queue", () => {
    const queue = new PriorityQueue<Vertex>();
    const vertex_a = new Vertex("A");
    const vertex_b = new Vertex("B");
    const vertex_c = new Vertex("C");
    const vertex_d = new Vertex("D");

    queue.insert(vertex_a, 10);
    queue.insert(vertex_b, 5);
    queue.insert(vertex_c, 11);
    queue.insert(vertex_d, 2);

    expect(queue.size()).toBe(4);

    queue.remove(vertex_d);

    expect(queue.size()).toBe(3);
    expect(queue.queue[0].value.getKey()).toBe("B");
  });

  it("changes priority of item", () => {
    const queue = new PriorityQueue<Vertex>();
    const vertex_a = new Vertex("A");
    const vertex_b = new Vertex("B");
    const vertex_c = new Vertex("C");
    const vertex_d = new Vertex("D");

    queue.insert(vertex_a, 10);
    queue.insert(vertex_b, 5);
    queue.insert(vertex_c, 11);
    queue.insert(vertex_d, 2);

    expect(queue.queue[0].value.getKey()).toBe("D");

    queue.changePriority(vertex_d, 100);

    expect(queue.queue[3].value.getKey()).toBe("D");
  });

  it("removes and returns element with lowest priority", () => {
    const queue = new PriorityQueue<Vertex>();
    const vertex_a = new Vertex("A");
    const vertex_b = new Vertex("B");
    const vertex_c = new Vertex("C");
    const vertex_d = new Vertex("D");

    queue.insert(vertex_a, 10);
    queue.insert(vertex_b, 5);
    queue.insert(vertex_c, 11);
    queue.insert(vertex_d, 2);

    const min = queue.pop();

    expect(queue.size()).toBe(3);

    if (min) {
      expect(min.value.getKey()).toBe("D");
    }
  });

  it("checks whether queue is empty", () => {
    const queue = new PriorityQueue<Vertex>();
    const vertex_a = new Vertex("A");

    expect(queue.isEmpty()).toBe(true);

    queue.insert(vertex_a, 10);

    expect(queue.isEmpty()).toBe(false);
  });

  it("returns minimum element", () => {
    const queue = new PriorityQueue<Vertex>();
    const vertex_a = new Vertex("A");
    const vertex_b = new Vertex("B");
    const vertex_c = new Vertex("C");
    const vertex_d = new Vertex("D");

    queue.insert(vertex_a, 10);
    queue.insert(vertex_b, 5);
    queue.insert(vertex_c, 11);
    queue.insert(vertex_d, 2);

    const min = queue.minimum();
    expect(queue.size()).toBe(4);

    if (min) {
      expect(min.value.getKey()).toBe("D");
    }
  });

  it("returns size of queue", () => {
    const queue = new PriorityQueue<Vertex>();
    const vertex_a = new Vertex("A");

    queue.insert(vertex_a, 10);

    expect(queue.size()).toBe(1);
  });

  it("returns toString", () => {
    const queue = new PriorityQueue<Vertex>();
    expect(queue.toString()).toBe("PriorityQueue");
  });
});

export {};
