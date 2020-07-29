import Vertex from "algorithms/graph/Vertex";
import Edge from "algorithms/graph/Edge";

describe("Edge", () => {
  it("returns proper key", () => {
    const vertex_a = new Vertex("A");
    const vertex_b = new Vertex("B");
    const edge = new Edge(vertex_a, vertex_b, 5);

    expect(edge.toString()).toBe("A_B");
  });
});

export {};
