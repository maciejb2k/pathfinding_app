import Graph from "./Graph";
import Edge from "./Edge";
import Vertex from "./Vertex";
import PriorityQueue from "./PriorityQueue";

function Dijkstra(graph: Graph, startVertex: Vertex) {
  const queue = new PriorityQueue<Vertex>();
  const distances: { [name: string]: number } = {};
  const previousVertices: { [name: string]: string | null } = {};
  const visitedVertices = {};

  Object.keys(graph.vertices).forEach((key: string) => {
    distances[key] = Infinity;
    previousVertices[key] = null;
  });

  distances[startVertex.getKey()] = 0;

  console.log(distances, previousVertices, graph.vertices);
  console.log(graph.getNeighbours(startVertex));
}

export default Dijkstra;
