import Vertex from "algorithms/graph/Vertex";
import Edge from "algorithms/graph/Edge";
import Graph from "algorithms/graph/Graph";
import { mapData } from "components/Map/mapData";

const getGraphFromJSON = (data: mapData) => {
  const vertices: { [key: string]: Vertex } = {};
  const graph = new Graph(true);

  let vertex: Vertex;
  Object.values(data.v).forEach((key: string) => {
    vertex = new Vertex(key);
    vertices[key] = vertex;
    graph.addVertex(vertex);
  });

  return graph;
};

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

export { getPathFromDijkstra, getGraphFromJSON };
