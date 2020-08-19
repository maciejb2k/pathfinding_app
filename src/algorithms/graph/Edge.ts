import Vertex from "./Vertex";

type EdgeOptions = { [key: string]: any };

interface Edge {
  startVertex: Vertex;
  endVertex: Vertex;
  options: EdgeOptions;
  weight: number;
}

class Edge {
  constructor(
    startVertex: Vertex,
    endVertex: Vertex,
    weight: number = 1,
    options: EdgeOptions = {}
  ) {
    this.startVertex = startVertex;
    this.endVertex = endVertex;
    this.options = options;
    this.weight = weight;
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
    return `${this.startVertex}__${this.endVertex}`;
  }

  getReverseKey() {
    return `${this.endVertex}__${this.startVertex}`;
  }

  toString() {
    return this.getKey();
  }
}

export default Edge;
