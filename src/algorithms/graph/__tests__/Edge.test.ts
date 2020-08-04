import Vertex from "algorithms/graph/Vertex";
import Edge from "algorithms/graph/Edge";

describe("Edge", () => {
  it("returns proper key", () => {
    const edge = new Edge(new Vertex("A"), new Vertex("B"), 5);

    expect(edge.getKey()).toBe("A_B");
  });

  it("reverses edge", () => {
    const edge = new Edge(new Vertex("A"), new Vertex("B"), 5);
    const newEdge = edge.reverse();

    expect(newEdge.getKey()).toBe("B_A");
  });
});

export {};
