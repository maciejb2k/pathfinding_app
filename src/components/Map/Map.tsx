import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { TransformComponent } from "react-zoom-pan-pinch";

import { mapData } from "./mapData";
import FloorMapSvg from "components/FloorMapSvg";
import { getGraphFromJSON, getPathFromDijkstra } from "algorithms/graph/Utils";
import Edge from "algorithms/graph/Edge";
import dijkstra from "algorithms/graph/Dijkstra";

import styles from "./Map.module.scss";

function Map(props: any) {
  const [verticesList, setVerticesList]: any = useState<any>();
  const [edgesList, setEdgesList]: any = useState<any>();

  const map = React.useRef<{ [key: string]: HTMLElement }>(null);
  const vertices = React.useRef<{ [key: string]: HTMLElement }>({});
  const edges = React.useRef<{ [key: string]: HTMLElement }>({});

  const [pathTimeline] = React.useState<GSAPTimeline>(
    gsap.timeline({
      paused: true,
    })
  );

  useEffect(() => {
    const graph = getGraphFromJSON(mapData);

    const startVertex = graph.getVertices()["v_95"];
    const endVertex = graph.getVertices()["v_6"];

    const { previousVertices } = dijkstra(graph, startVertex);
    const { vertices, edges } = getPathFromDijkstra(
      graph.edges,
      previousVertices,
      endVertex
    );

    setVerticesList(vertices);
    setEdgesList(edges);
  }, []);

  React.useEffect(() => {
    if (edgesList && pathTimeline) {
      edgesList.forEach((edge: Edge) => {
        let key: string;

        if (edge.getKey() in edges.current) {
          key = edge.getKey();
        } else {
          key = edge.getReverseKey();
        }

        pathTimeline.to(edges.current[key], {
          opacity: 1,
          duration: 0.03,
        });
      });

      pathTimeline.resume();
    }
  }, [edgesList, pathTimeline]);

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

  const showAllVertices = () => {
    Object.values(vertices.current).forEach((vertex: HTMLElement) => {
      gsap.to(vertex, { opacity: 1 });
    });
  };

  const hideAllVertices = () => {
    Object.values(vertices.current).forEach((vertex: HTMLElement) => {
      gsap.to(vertex, { opacity: 0 });
    });
  };

  const showAllEdges = () => {
    Object.values(edges.current).forEach((edges: HTMLElement) => {
      gsap.to(edges, { opacity: 1 });
    });
  };

  const hideAllEdges = () => {
    Object.values(edges.current).forEach((edge: HTMLElement) => {
      gsap.to(edge, { opacity: 0 });
    });
  };

  const onVertexClick = (e: Event) => {};

  const onObjectClick = (e: Event) => {};

  return (
    <>
      <TransformComponent>
        <div className={styles["Map"]}>
          <FloorMapSvg
            mapData={mapData}
            mapRef={map}
            vertexRefCallback={vertexRefCallback}
            edgeRefCallback={edgeRefCallback}
            onVertexClick={onVertexClick}
            onObjectClick={onObjectClick}
          />
        </div>
      </TransformComponent>
    </>
  );
}

export default Map;
