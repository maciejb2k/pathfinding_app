import React from "react";

function Map() {
  const vertices = React.useRef<{ [key: string]: HTMLElement }>({});

  React.useEffect(() => {
    console.log(vertices);
  }, []);

  const vertexRefCallback = (el: HTMLElement | null) => {
    if (el && el.dataset.vertexKey) {
      vertices.current[el.dataset.vertexKey] = el;
    }
  };

  return (
    <div className="App">
      <div className="Vertex" data-vertex-key="A_01" ref={vertexRefCallback} />
    </div>
  );
}

export default Map;
