import Vertex from "./Vertex";
import Edge from "./Edge";

interface Graph {
  vertices: object[];
  edges: { [vertexName: string]: { [neighbourVertex: string]: Edge } };
  options?: object;
}

class Graph {
  constructor(options?: object) {
    this.vertices = [];
    this.edges = {};
    this.options = options;
  }

  hasVertex(vertex: Vertex) {
    return vertex.getKey() in this.edges ? true : false;
  }

  addVertex(vertex: Vertex) {
    if (this.hasVertex(vertex)) {
      return false;
    }

    this.edges[vertex.getKey()] = {};
    return true;
  }

  delVertex(vertex: Vertex) {
    if (!this.hasVertex(vertex)) {
      return false;
    }

    const key = vertex.getKey();

    Object.keys(this.edges).forEach((startVertex) => {
      Object.keys(this.edges[startVertex]).forEach((endVertex) => {
        if (key === endVertex) {
          delete this.edges[startVertex][endVertex];
        }
      });
    });

    delete this.edges[key];
    return true;
  }

  getVerticesFromEdge(edge: Edge) {
    const startVertex = edge.startVertex.getKey();
    const endVertex = edge.endVertex.getKey();

    return [startVertex, endVertex];
  }

  hasEdge(edge: Edge) {
    const [startVertex, endVertex] = this.getVerticesFromEdge(edge);

    if (endVertex in this.edges[startVertex]) {
      return true;
    }

    return false;
  }

  addEdge(edge: Edge) {
    const [startVertex, endVertex] = this.getVerticesFromEdge(edge);

    if (endVertex in this.edges[startVertex]) {
      return false;
    }

    this.edges[startVertex][endVertex] = edge;
    return true;
  }

  delEdge(edge: Edge) {
    const [startVertex, endVertex] = this.getVerticesFromEdge(edge);

    if (endVertex in this.edges[startVertex]) {
      delete this.edges[startVertex][endVertex];
      return true;
    }

    return false;
  }

  getVertices() {
    return Object.keys(this.edges);
  }

  getEdges() {
    return this.edges;
  }

  printGraph() {
    const graph = Object.keys(this.edges)
      .map((startVertex) => {
        const edges = Object.keys(this.edges[startVertex]).map(
          (e) => `(${startVertex}, ${e})`
        );
        return `${startVertex} : ${edges.length} -> ${edges.join(", ")}`;
      })
      .join("\n");

    return graph;
  }

  toString() {
    return "GraphInstance";
  }
}

export default Graph;
