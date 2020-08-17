import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import classNames from "classnames";

import Vertex from "algorithms/graph/Vertex";
import SvgComponent from "./SvgComponent";
import { mapData } from "./mapData";

function Map(props: any) {
  const { verticesList } = props;

  const map = React.useRef<{ [key: string]: HTMLElement }>(null);
  const vertices = React.useRef<{ [key: string]: HTMLElement }>({});
  const edges = React.useRef<{ [key: string]: HTMLElement }>({});

  React.useEffect(() => {
    if (verticesList) {
      let nodes: any = [];
      verticesList.forEach((vertex: Vertex) => {
        nodes.push(vertices.current[vertex.getKey()]);
      });

      gsap.to(nodes, { opacity: 1, fill: "green", display: "flex" });
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
      <SvgComponent
        mapData={mapData}
        mapRef={map}
        vertexRefCallback={vertexRefCallback}
        edgeRefCallback={edgeRefCallback}
      />
    </div>
  );
}

export default Map;
