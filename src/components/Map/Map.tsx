import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

import FloorMapSvg from "components/FloorMapSvg";
import { getPathFromDijkstra } from "algorithms/graph/Utils";
import { IState as GraphState } from "store/graph/reducer";
import { IState as PathState } from "store/path/reducer";
import { getPath } from "store/path/actions";

import Edge from "algorithms/graph/Edge";
import dijkstra from "algorithms/graph/Dijkstra";

import styles from "./Map.module.scss";

type AppProps = {
  graph: GraphState;
  path: PathState;
  getPath: typeof getPath;
};

function Map(props: AppProps) {
  const {
    graph: { graph, isGenerating },
    path: {
      isPathPreview,
      pathTimeline,
      dijkstra: { vertices: pathVertices, edges: pathEdges },
    },
  } = props;

  const verticesRefs = React.useRef<{ [key: string]: HTMLElement }>({});
  const edgesRefs = React.useRef<{ [key: string]: HTMLElement }>({});
  const objectsRefs = React.useRef<{ [key: string]: HTMLElement }>({});

  useEffect(() => {
    if (pathTimeline && pathEdges && pathEdges.length) {
      pathEdges.forEach((edge: Edge) => {
        let key: string;

        if (edge.getKey() in edgesRefs.current) {
          key = edge.getKey();
        } else {
          key = edge.getReverseKey();
        }

        pathTimeline.to(edgesRefs.current[key], {
          opacity: 1,
          duration: 0.03,
        });
      });

      const lastVertex = pathVertices[pathVertices.length - 1];

      if (objectsRefs && lastVertex.options && lastVertex.options.objectId) {
        const mapObject = objectsRefs.current[lastVertex.options.objectId];
        pathTimeline.to(mapObject, {
          duration: 0.03,
          fill: "#C7FFCC",
          stroke: "#4FBA5A",
        });
      }

      pathTimeline.resume();
    }
  }, [pathEdges, pathVertices, pathTimeline]);

  const vertexRefCallback = (el: HTMLElement | null) => {
    if (el && el.dataset.vertexKey) {
      let key = el.dataset.vertexKey.trim().toLowerCase();
      verticesRefs.current[key] = el;
    }
  };

  const objectRefCallback = (el: HTMLElement | null) => {
    if (el && el.dataset.objectKey) {
      let key = el.dataset.objectKey.trim().toLowerCase();
      objectsRefs.current[key] = el;
    }
  };

  const edgeRefCallback = (el: HTMLElement | null) => {
    if (el && el.dataset.edgeKey) {
      let key = el.dataset.edgeKey.trim().toLowerCase();
      edgesRefs.current[key] = el;
    }
  };

  return (
    <div className={styles["Map"]}>
      <FloorMapSvg
        vertexRefCallback={vertexRefCallback}
        edgeRefCallback={edgeRefCallback}
        objectRefCallback={objectRefCallback}
      />
    </div>
  );
}

export default Map;
