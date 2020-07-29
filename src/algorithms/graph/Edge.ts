import Vertex from "./Vertex";

interface Edge {
  startVertex: Vertex;
  endVertex: Vertex;
  weight?: number;
  options?: object;
}

class Edge {
  constructor(
    startVertex: Vertex,
    endVertex: Vertex,
    weight?: number,
    options?: object
  ) {
    this.startVertex = startVertex;
    this.endVertex = endVertex;
    this.weight = weight;
    this.options = options;
  }

  reverse() {
    return new Edge(
      this.endVertex,
      this.startVertex,
      this.weight,
      this.options
    );
  }

  getKey() {
    return `${this.startVertex}_${this.endVertex}`;
  }

  toString() {
    return this.getKey();
  }
}

export default Edge;
