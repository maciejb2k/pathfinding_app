import Vertex from "algorithms/graph/Vertex";
import Edge from "algorithms/graph/Edge";
import Graph from "algorithms/graph/Graph";
import dijkstra from "algorithms/graph/Dijkstra";
import { getPathFromDijkstra } from "algorithms/graph/Utils";

describe("Utils", () => {
  it("should return vertices and edges", () => {
    const graph = new Graph(true);

    const vertex_a = new Vertex("A");
    const vertex_b = new Vertex("B");
    const vertex_c = new Vertex("C");
    const vertex_d = new Vertex("D");
    const vertex_e = new Vertex("E");
    const vertex_f = new Vertex("F");
    const vertex_g = new Vertex("G");
    const vertex_h = new Vertex("H");

    const edge_a_b = new Edge(vertex_a, vertex_b, 1);
    const edge_b_c = new Edge(vertex_b, vertex_c, 2);
    const edge_c_d = new Edge(vertex_c, vertex_d, 3);
    const edge_d_h = new Edge(vertex_d, vertex_h, 20);
    const edge_b_d = new Edge(vertex_b, vertex_d, 1);
    const edge_h_g = new Edge(vertex_h, vertex_g, 3);
    const edge_g_h = new Edge(vertex_g, vertex_h, 1);
    const edge_g_f = new Edge(vertex_g, vertex_f, 4);
    const edge_f_g = new Edge(vertex_f, vertex_g, 3);
    const edge_e_f = new Edge(vertex_e, vertex_f, 2);
    const edge_f_e = new Edge(vertex_f, vertex_e, 3);
    const edge_e_b = new Edge(vertex_e, vertex_b, 3);
    const edge_b_e = new Edge(vertex_b, vertex_e, 3);

    graph.addVertex(vertex_a);
    graph.addVertex(vertex_b);
    graph.addVertex(vertex_c);
    graph.addVertex(vertex_d);
    graph.addVertex(vertex_e);
    graph.addVertex(vertex_f);
    graph.addVertex(vertex_g);
    graph.addVertex(vertex_h);

    graph.addEdge(edge_a_b);
    graph.addEdge(edge_b_c);
    graph.addEdge(edge_c_d);
    graph.addEdge(edge_d_h);
    graph.addEdge(edge_b_d);
    graph.addEdge(edge_h_g);
    graph.addEdge(edge_g_h);
    graph.addEdge(edge_g_f);
    graph.addEdge(edge_f_g);
    graph.addEdge(edge_e_f);
    graph.addEdge(edge_f_e);
    graph.addEdge(edge_e_b);
    graph.addEdge(edge_b_e);

    const startVertex = vertex_a;
    const endVertex = vertex_h;

    const { previousVertices } = dijkstra(graph, startVertex);
    const { vertices, edges } = getPathFromDijkstra(
      graph.edges,
      previousVertices,
      endVertex
    );

    expect(vertices.length).toBe(6);
    expect(vertices[0].getKey()).toBe("A");
    expect(vertices[1].getKey()).toBe("B");
    expect(vertices[2].getKey()).toBe("E");
    expect(vertices[3].getKey()).toBe("F");
    expect(vertices[4].getKey()).toBe("G");
    expect(vertices[5].getKey()).toBe("H");

    expect(edges.length).toBe(5);
    expect(edges[0].getKey()).toBe("A_B");
    expect(edges[1].getKey()).toBe("B_E");
    expect(edges[2].getKey()).toBe("E_F");
    expect(edges[3].getKey()).toBe("F_G");
    expect(edges[4].getKey()).toBe("G_H");
  });
});

export {};
