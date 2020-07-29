import Vertex from "algorithms/graph/Vertex";

describe("Vertex", () => {
  it("returns proper key", () => {
    const vertex = new Vertex("A");
    expect(vertex.toString()).toBe("A");
  });
});

export {};
