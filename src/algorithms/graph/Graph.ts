import Vertex from "./Vertex";
import Edge from "./Edge";

type GraphOptions = { [key: string]: any };

interface Graph {
  vertices: { [vertexName: string]: Vertex };
  edges: { [edgeName: string]: Edge };
  adjencyList: { [vertexName: string]: { [neighbourVertex: string]: Edge } };
  options: GraphOptions;
  isDirected: boolean;
}

// TODO - Add non-direction, because now graph is only directed

class Graph {
  constructor(isDirected: boolean = false, options: GraphOptions = {}) {
    this.isDirected = isDirected;
    this.vertices = {};
    this.edges = {};
    this.adjencyList = {};
    this.options = options;
  }

  hasVertex(vertex: Vertex) {
    return vertex.getKey() in this.vertices ? true : false;
  }

  addVertex(vertex: Vertex) {
    if (this.hasVertex(vertex)) {
      return false;
    }

    this.vertices[vertex.getKey()] = vertex;
    this.adjencyList[vertex.getKey()] = {};
    return true;
  }

  delVertex(vertex: Vertex) {
    if (!this.hasVertex(vertex)) {
      return false;
    }

    const key = vertex.getKey();

    // Loops through ajdency list linearly to match key
    Object.keys(this.adjencyList).forEach((startVertex) => {
      Object.keys(this.adjencyList[startVertex]).forEach((endVertex) => {
        if (key === endVertex) {
          delete this.adjencyList[startVertex][endVertex];
        }
      });
    });

    delete this.vertices[key];
    delete this.adjencyList[key];
    return true;
  }

  addEdge(edge: Edge) {
    const [startVertex, endVertex] = this.getVerticesFromEdge(edge);
    const edgeKey = edge.getKey();

    // Checks whether edge arleady exist
    if (edgeKey in this.edges) {
      return false;
    }

    // Checks whether vertices exists in graph
    if (!(startVertex in this.vertices) || !(endVertex in this.vertices)) {
      return false;
    }

    this.edges[edgeKey] = edge;
    this.adjencyList[startVertex][endVertex] = edge;
    return true;
  }

  delEdge(edge: Edge) {
    const [startVertex, endVertex] = this.getVerticesFromEdge(edge);
    const key = edge.getKey();

    if (key in this.edges) {
      delete this.adjencyList[startVertex][endVertex];
      delete this.edges[key];
      return true;
    }

    return false;
  }

  getVerticesFromEdge(edge: Edge) {
    const startVertex = edge.startVertex.getKey();
    const endVertex = edge.endVertex.getKey();

    return [startVertex, endVertex];
  }

  hasEdge(edge: Edge) {
    return edge.getKey() in this.edges ? true : false;
  }

  getNeighbours(vertex: Vertex): Array<Edge> {
    return Object.values(this.adjencyList[vertex.getKey()]);
  }

  getVertices() {
    return this.vertices;
  }

  getEdges() {
    return this.edges;
  }

  getAdjencyList() {
    return this.adjencyList;
  }

  printGraph() {
    const graph = Object.keys(this.adjencyList)
      .map((startVertex) => {
        const edges = Object.keys(this.adjencyList[startVertex]).map(
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
