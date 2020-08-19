import Vertex from "algorithms/graph/Vertex";
import Edge from "algorithms/graph/Edge";
import Graph from "algorithms/graph/Graph";
import { mapData } from "components/Map/mapData";

const getGraphFromJSON = (map: mapData, isDirected = false) => {
  const graph = new Graph(isDirected);

  Object.values(map.v).forEach((v: any) => {
    let key = v.key.trim().toLowerCase();
    let vertex = new Vertex(key, { ...v.options });
    graph.addVertex(vertex);
  });

  Object.values(map.e).forEach((e: any) => {
    let [startVertex, endVertex] = e.key
      .split("__")
      .map((item: string) => item.trim().toLowerCase());

    let edge = new Edge(
      graph.getVertices()[startVertex],
      graph.getVertices()[endVertex],
      e.weight
    );

    graph.addEdge(edge);
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
      let edgeKey = `${vertices[i - 1].getKey()}__${vertices[i].getKey()}`;
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
