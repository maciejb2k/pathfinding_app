import React from "react";

function App() {
  const vertices: any = React.useRef({});

  React.useEffect(() => {
    console.log(vertices.current);
  }, []);

  const vertexRefCallback = (el: HTMLElement | null) => {
    if (el && el.dataset.vertexKey) {
      vertices.current[el.dataset.vertexKey] = el;
    }
  };

  return (
    <div className="App">
      <div className="svg">
        <div
          className="Vertex"
          data-vertex-key="A_01"
          ref={vertexRefCallback}
        />
      </div>
    </div>
  );
}

export default App;
