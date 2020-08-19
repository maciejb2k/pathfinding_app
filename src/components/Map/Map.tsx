import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import classNames from "classnames";

import Vertex from "algorithms/graph/Vertex";
import Edge from "algorithms/graph/Edge";
import SvgComponent from "./SvgComponent";
import { mapData } from "./mapData";

function Map(props: any) {
  const { verticesList, edgesList } = props;

  const map = React.useRef<{ [key: string]: HTMLElement }>(null);
  const vertices = React.useRef<{ [key: string]: HTMLElement }>({});
  const edges = React.useRef<{ [key: string]: HTMLElement }>({});

  console.log(edgesList, edges);

  React.useEffect(() => {
    if (edgesList) {
      let nodes: any = [];
      edgesList.forEach((edge: Edge) => {
        if (edge.getKey() in edges.current) {
          nodes.push(edges.current[edge.getKey()]);
        } else {
          nodes.push(edges.current[edge.getReverseKey()]);
        }
      });

      gsap.to(nodes, { opacity: 1, fill: "blue", display: "flex" });
    }
  }, [edgesList]);

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
