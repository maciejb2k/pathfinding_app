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
  const [edges, setEdges]: any = useState<any>();

  useEffect(() => {
    const graph = getGraphFromJSON(mapData);

    const startVertex = graph.getVertices()["v_75"];
    const endVertex = graph.getVertices()["v_7"];

    const { previousVertices } = dijkstra(graph, startVertex);
    const { vertices, edges } = getPathFromDijkstra(
      graph.edges,
      previousVertices,
      endVertex
    );

    setVertices(vertices);
    setEdges(edges);
  }, []);

  return (
    <div className="App">
      <Map verticesList={vertices} edgesList={edges} />
    </div>
  );
}

export default App;
