import React from "react";
import Graph from "algorithms/graph/Graph";
import Vertex from "algorithms/graph/Vertex";
import Edge from "algorithms/graph/Edge";

function App() {
  const graph = new Graph();
  console.log(graph.getVertices());

  const vertex_a = new Vertex("A");
  const vertex_b = new Vertex("B");
  const vertex_f = new Vertex("F");

  const edge_a_b = new Edge(vertex_a, vertex_b, 4);
  const edge_a_f = new Edge(vertex_a, vertex_f, 5);

  graph.addVertex(vertex_a);
  graph.addVertex(vertex_b);
  graph.addVertex(vertex_f);
  graph.addEdge(edge_a_b);
  graph.addEdge(edge_a_f);

  console.log(graph.printGraph());
  console.log(graph.getEdges());

  graph.delVertex(vertex_b);

  console.log(graph.getEdges());

  return (
    <div className="App">
      <h1>Siemanko</h1>
    </div>
  );
}

export default App;
