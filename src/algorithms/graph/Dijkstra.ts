import Graph from "./Graph";
import Edge from "./Edge";
import Vertex from "./Vertex";
import PriorityQueue from "./PriorityQueue";

function Dijkstra(graph: Graph, startVertex: Vertex) {
  const queue = new PriorityQueue<Vertex>();
  const distances: { [vertexKey: string]: number } = {};
  const previousVertices: { [vertexKey: string]: Vertex | null } = {};
  const visitedVertices: { [vertexKey: string]: boolean } = {};
  const edges: Edge[] = [];

  distances[startVertex.getKey()] = 0;

  Object.keys(graph.vertices).forEach((key: string) => {
    if (key !== startVertex.getKey()) {
      distances[key] = Infinity;
      previousVertices[key] = null;
    }

    queue.insert(graph.vertices[key], distances[key]);
  });

  visitedVertices[startVertex.getKey()] = true;

  while (!queue.isEmpty()) {
    const currentVertex = queue.pop();

    if (currentVertex) {
      graph.getNeighbours(currentVertex.value).forEach((edge) => {
        const neighbour = edge.endVertex;
        const currentVertexKey = currentVertex.value.getKey();

        if (!visitedVertices[neighbour.getKey()]) {
          let distanceToNeighbour = distances[currentVertexKey] + edge.weight;

          if (distanceToNeighbour < distances[neighbour.getKey()]) {
            distances[neighbour.getKey()] = distanceToNeighbour;
            previousVertices[neighbour.getKey()] = currentVertex.value;
            edges.push(edge);

            queue.changePriority(edge.endVertex, distanceToNeighbour);
          }
        }
      });

      visitedVertices[currentVertex.value.getKey()] = true;
    }
  }

  return {
    distances,
    previousVertices,
  };
}

export default Dijkstra;
