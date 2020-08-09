import React from "react";
import { mapData as m } from "./mapData";

import "./Map.scss";

function Map(props: any) {
  const vertices = React.useRef<{ [key: string]: HTMLElement }>({});
  const edges = React.useRef<{ [key: string]: HTMLElement }>({});
  const { verticesList } = props;

  React.useEffect(() => {
    if (verticesList) {
      verticesList.forEach((vertex: any) => {
        vertices.current[vertex.getKey()].style.backgroundColor = "green";
      });
    }
  }, [verticesList]);

  const vertexRefCallback = (el: HTMLElement | null) => {
    if (el && el.dataset.vertexKey) {
      let key = el.dataset.vertexKey.trim().toLowerCase();
      vertices.current[key] = el;
    }
  };

  const edgeRefCallback = (el: HTMLElement | null) => {
    if (el && el.dataset.edgeKeys) {
      el.dataset.edgeKeys.split(",").forEach((key: string) => {
        key = key.trim().toLowerCase();
        edges.current[key] = el;
      });
    }
  };

  return (
    <div className="Map">
      <div className="Vertices">
        <div
          className="Vertex"
          data-vertex-key={m.v.v_1.key}
          ref={vertexRefCallback}
        >
          v_1
        </div>
        <div
          className="Vertex"
          data-vertex-key={m.v.v_2.key}
          ref={vertexRefCallback}
        >
          v_2
        </div>
        <div
          className="Vertex"
          data-vertex-key={m.v.v_3.key}
          ref={vertexRefCallback}
        >
          v_3
        </div>
        <div
          className="Vertex"
          data-vertex-key={m.v.v_4.key}
          ref={vertexRefCallback}
        >
          v_4
        </div>
        <div
          className="Vertex"
          data-vertex-key={m.v.v_5.key}
          ref={vertexRefCallback}
        >
          v_5
        </div>
        <div
          className="Vertex"
          data-vertex-key={m.v.v_6.key}
          ref={vertexRefCallback}
        >
          v_6
        </div>
        <div
          className="Vertex"
          data-vertex-key={m.v.v_7.key}
          ref={vertexRefCallback}
        >
          v_7
        </div>
        <div
          className="Vertex"
          data-vertex-key={m.v.v_8.key}
          ref={vertexRefCallback}
        >
          v_8
        </div>
        <div
          className="Vertex"
          data-vertex-key={m.v.v_9.key}
          ref={vertexRefCallback}
        >
          v_9
        </div>
        <div
          className="Vertex"
          data-vertex-key={m.v.v_10.key}
          ref={vertexRefCallback}
        >
          v_10
        </div>
        <div
          className="Vertex"
          data-vertex-key={m.v.v_11.key}
          ref={vertexRefCallback}
        >
          v_11
        </div>
        <div
          className="Vertex"
          data-vertex-key={m.v.v_12.key}
          ref={vertexRefCallback}
        >
          v_12
        </div>
        <div
          className="Vertex"
          data-vertex-key={m.v.v_13.key}
          ref={vertexRefCallback}
        >
          v_13
        </div>
        <div
          className="Vertex"
          data-vertex-key={m.v.v_14.key}
          ref={vertexRefCallback}
        >
          v_14
        </div>
        <div
          className="Vertex"
          data-vertex-key={m.v.v_15.key}
          ref={vertexRefCallback}
        >
          v_15
        </div>
        <div
          className="Vertex"
          data-vertex-key={m.v.v_16.key}
          ref={vertexRefCallback}
        >
          v_16
        </div>
        <div
          className="Vertex"
          data-vertex-key={m.v.v_17.key}
          ref={vertexRefCallback}
        >
          v_17
        </div>
        <div
          className="Vertex"
          data-vertex-key={m.v.v_18.key}
          ref={vertexRefCallback}
        >
          v_18
        </div>
        <div
          className="Vertex"
          data-vertex-key={m.v.v_19.key}
          ref={vertexRefCallback}
        >
          v_19
        </div>
      </div>

      <div className="Edges">
        <div
          className="Edge"
          data-edge-keys={m.e.v_1__v_2.key}
          ref={edgeRefCallback}
        />
      </div>
    </div>
  );
}

export default Map;
