import React, { useEffect } from "react";
import { getGraphFromJSON } from "algorithms/graph/Utils";
import { mapData } from "components/Map/mapData";

function App() {
  useEffect(() => {
    console.log(getGraphFromJSON(mapData));
  }, []);

  return <div className="App"></div>;
}

export default App;
