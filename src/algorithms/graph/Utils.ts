import Vertex from "algorithms/graph/Vertex";
import Graph from "algorithms/graph/Graph";
import Edge from "algorithms/graph/Edge";

const getPathFromDijkstra = (
  graph: Graph,
  previousVertices: { [vertexKey: string]: Vertex | null },
  endVertex: Vertex
) => {
  const vertices: Vertex[] = [];
  const edges: Edge[] = [];

  const createListOfVertices = (destinationVertex: Vertex) => {
    const nextVertex = previousVertices[destinationVertex.getKey()];

    if (nextVertex) {
      vertices.unshift(nextVertex);
      createListOfVertices(nextVertex);
      return true;
    } else {
      return false;
    }
  };

  const createListOfEdges = (vertices: Vertex[]) => {
    for (let i = 1; i < vertices.length; i++) {
      let edgeKey = `${vertices[i - 1].getKey()}_${vertices[i].getKey()}`;
      if (graph.edges[edgeKey]) {
        edges.push(graph.edges[edgeKey]);
      }
    }
  };

  if (createListOfVertices(endVertex)) {
    vertices.push(endVertex);
    createListOfEdges(vertices);
  }

  return {
    vertices,
    edges,
  };
};

export { getPathFromDijkstra };
