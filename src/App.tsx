import React, { useEffect, useState } from "react";
import { getGraphFromJSON, getPathFromDijkstra } from "algorithms/graph/Utils";
import { mapData } from "components/Map/mapData";
import Map from "components/Map";

import Vertex from "algorithms/graph/Vertex";
import Edge from "algorithms/graph/Edge";
import Graph from "algorithms/graph/Graph";
import dijkstra from "algorithms/graph/Dijkstra";

function App() {
  const [vertices, setVertices]: any = useState<any>();

  useEffect(() => {
    const graph = getGraphFromJSON(mapData);
    const { previousVertices } = dijkstra(graph, graph.getVertices()["v_1"]);
    const { vertices } = getPathFromDijkstra(
      graph.edges,
      previousVertices,
      graph.getVertices()["v_8"]
    );

    setVertices(vertices);
  }, []);

  return (
    <div className="App">
      <Map verticesList={vertices} />
    </div>
  );
}

export default App;
