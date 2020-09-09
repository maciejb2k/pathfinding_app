type VertexOptions = { [key: string]: any };

interface Vertex {
  name: string;
  options: VertexOptions;
}

class Vertex {
  constructor(name: string, options: VertexOptions = {}) {
    this.name = name;
    this.options = options;
  }

  getKey(): string {
    return this.name;
  }

  toString() {
    return this.getKey();
  }
}

export default Vertex;
