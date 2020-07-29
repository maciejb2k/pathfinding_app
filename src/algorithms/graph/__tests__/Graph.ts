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

    expect(Object.keys(graph.getEdges())).toHaveLength(1);
  });

  it("deletes vertex", () => {
    const graph = new Graph();
    const vertex_a = new Vertex("A");

    graph.addVertex(vertex_a);
    graph.delVertex(vertex_a);

    expect(Object.keys(graph.getEdges())).toHaveLength(0);
  });

  it("checks whether graph has vertex", () => {});

  it("adds edge", () => {
    const graph = new Graph();
    const vertex_a = new Vertex("A");
    const vertex_b = new Vertex("B");
    const edge_a_b = new Edge(vertex_a, vertex_b);

    graph.addVertex(vertex_a);
    graph.addVertex(vertex_b);
    graph.addEdge(edge_a_b);

    expect(graph.getEdges()[vertex_a.getKey()]).toMatchObject({
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

    expect(Object.keys(graph.getEdges()[vertex_a.getKey()])).toHaveLength(1);
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

    expect(Object.keys(graph.getEdges()[vertex_a.getKey()])).toHaveLength(0);
  });

  it("returns vertices", () => {
    const graph = new Graph();
    expect(graph.getVertices()).toEqual([]);
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
