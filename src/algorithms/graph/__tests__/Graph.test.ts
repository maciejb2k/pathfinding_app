import Vertex from "algorithms/graph/Vertex";
import Edge from "algorithms/graph/Edge";
import Graph from "algorithms/graph/Graph";

describe("Graph", () => {
  it("adds vertex to graph", () => {
    const graph = new Graph();
    const vertex_a = new Vertex("A");

    graph.addVertex(vertex_a);

    expect(graph.hasVertex(vertex_a)).toBe(true);
  });

  it("throws when adding same vertex", () => {
    const graph = new Graph();
    const vertex_a = new Vertex("A");

    graph.addVertex(vertex_a);
    graph.addVertex(vertex_a);

    expect(Object.keys(graph.getAdjencyList())).toHaveLength(1);
  });

  it("deletes vertex", () => {
    const graph = new Graph();
    const vertex_a = new Vertex("A");

    graph.addVertex(vertex_a);
    graph.delVertex(vertex_a);

    expect(Object.keys(graph.getAdjencyList())).toHaveLength(0);
  });

  it("throws when vertex not in graph", () => {
    const graph = new Graph();
    const vertex_a = new Vertex("A");

    const result = graph.delVertex(vertex_a);

    expect(result).toBe(false);
  });

  it("checks whether graph has vertex", () => {
    const graph = new Graph();
    const vertex_a = new Vertex("A");
    graph.addVertex(vertex_a);

    expect(graph.hasVertex(vertex_a)).toBe(true);
  });

  it("adds edge", () => {
    const graph = new Graph();
    const vertex_a = new Vertex("A");
    const vertex_b = new Vertex("B");
    const edge_a_b = new Edge(vertex_a, vertex_b);

    graph.addVertex(vertex_a);
    graph.addVertex(vertex_b);
    graph.addEdge(edge_a_b);

    expect(graph.getAdjencyList()[vertex_a.getKey()]).toMatchObject({
      [vertex_b.getKey()]: edge_a_b,
    });
  });

  it("throws when adding same edge", () => {
    const graph = new Graph();
    const vertex_a = new Vertex("A");
    const vertex_b = new Vertex("B");
    const edge_a_b = new Edge(vertex_a, vertex_b);

    graph.addVertex(vertex_a);
    graph.addVertex(vertex_b);
    graph.addEdge(edge_a_b);
    graph.addEdge(edge_a_b);

    expect(Object.keys(graph.getAdjencyList()[vertex_a.getKey()])).toHaveLength(
      1
    );
  });

  it("deletes edge", () => {
    const graph = new Graph();
    const vertex_a = new Vertex("A");
    const vertex_b = new Vertex("B");
    const edge_a_b = new Edge(vertex_a, vertex_b);

    graph.addVertex(vertex_a);
    graph.addVertex(vertex_b);
    graph.addEdge(edge_a_b);
    graph.delEdge(edge_a_b);

    expect(Object.keys(graph.getEdges())).toHaveLength(0);
  });

  it("throws when edge not in graph", () => {
    const graph = new Graph();
    const vertex_a = new Vertex("A");
    const vertex_b = new Vertex("B");
    const edge_a_b = new Edge(vertex_a, vertex_b);

    const result = graph.hasEdge(edge_a_b);

    expect(result).toBe(false);
  });

  it("throws when deleting edge not in graph", () => {
    const graph = new Graph();
    const vertex_a = new Vertex("A");
    const vertex_b = new Vertex("B");
    const edge_a_b = new Edge(vertex_a, vertex_b);

    const result = graph.delEdge(edge_a_b);

    expect(result).toBe(false);
  });

  it("throws when adding edge without vertcies present", () => {
    const graph = new Graph();
    const vertex_a = new Vertex("A");
    const vertex_b = new Vertex("B");
    const edge_a_b = new Edge(vertex_a, vertex_b);

    const result = graph.addEdge(edge_a_b);

    expect(result).toBe(false);
  });

  it("checks whether edge exists in graph", () => {
    const graph = new Graph();
    const vertex_a = new Vertex("A");
    const vertex_b = new Vertex("B");
    const edge_a_b = new Edge(vertex_a, vertex_b);

    graph.addVertex(vertex_a);
    graph.addVertex(vertex_b);
    graph.addEdge(edge_a_b);

    expect(graph.hasEdge(edge_a_b)).toBe(true);
  });

  it("returns list of edges", () => {
    const graph = new Graph();
    const vertex_a = new Vertex("A");
    const vertex_b = new Vertex("B");
    const edge_a_b = new Edge(vertex_a, vertex_b);

    graph.addVertex(vertex_a);
    graph.addVertex(vertex_b);
    graph.addEdge(edge_a_b);

    expect(graph.getEdges()).toMatchObject({
      [edge_a_b.getKey()]: edge_a_b,
    });
  });

  it("returns list of vertices", () => {
    const graph = new Graph();
    const vertex_a = new Vertex("A");
    graph.addVertex(vertex_a);

    expect(graph.getVertices()).toMatchObject({
      [vertex_a.getKey()]: vertex_a,
    });
  });

  it("prints graph", () => {
    const graph = new Graph();

    expect(typeof graph.printGraph()).toEqual("string");
  });

  it("casts to string", () => {
    const graph = new Graph();

    expect(typeof graph.toString()).toBe("string");
  });
});

export {};
