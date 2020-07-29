interface Vertex {
  name: string;
  options?: object;
}

class Vertex {
  constructor(name: string, options?: object) {
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
