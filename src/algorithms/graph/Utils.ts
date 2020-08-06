import Vertex from "algorithms/graph/Vertex";
import Edge from "algorithms/graph/Edge";

const getPathFromDijkstra = (
  edgesList: { [edgeName: string]: Edge },
  previousVertices: {
    [vertexKey: string]: Vertex | null;
  },
  endVertex: Vertex
) => {
  const vertices: Vertex[] = [];
  const edges: Edge[] = [];

  const createListOfVertices = (destinationVertex: Vertex) => {
    const nextVertex = previousVertices[destinationVertex.getKey()];

    if (nextVertex) {
      vertices.unshift(nextVertex);
      createListOfVertices(nextVertex);
    }
  };

  const createListOfEdges = (vertices: Vertex[]) => {
    for (let i = 1; i < vertices.length; i++) {
      let edgeKey = `${vertices[i - 1].getKey()}_${vertices[i].getKey()}`;
      if (edgesList[edgeKey]) {
        edges.push(edgesList[edgeKey]);
      }
    }
  };

  createListOfVertices(endVertex);

  if (vertices.length) {
    vertices.push(endVertex);
    createListOfEdges(vertices);
  }

  return {
    vertices,
    edges,
  };
};

export { getPathFromDijkstra };
