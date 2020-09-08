import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

import FloorMapSvg from "components/FloorMapSvg";
import { getPathFromDijkstra } from "algorithms/graph/Utils";
import { IState as GraphState } from "store/graph/reducer";
import { getDijkstra } from "store/graph/actions";

import Edge from "algorithms/graph/Edge";
import dijkstra from "algorithms/graph/Dijkstra";

import styles from "./Map.module.scss";

type AppProps = {
  graph: GraphState;
  getDijkstra: typeof getDijkstra;
};

function Map(props: AppProps) {
  const {
    graph: { graph },
    getDijkstra,
  } = props;

  const [verticesList, setVerticesList]: any = useState<any>();
  const [edgesList, setEdgesList]: any = useState<any>();

  const vertices = React.useRef<{ [key: string]: HTMLElement }>({});
  const edges = React.useRef<{ [key: string]: HTMLElement }>({});
  const objects = React.useRef<{ [key: string]: HTMLElement }>({});

  const [pathTimeline] = React.useState<GSAPTimeline>(
    gsap.timeline({
      paused: true,
    })
  );

  useEffect(() => {
    if (graph) {
      getDijkstra({
        startVertexKey: "v_95",
        endVertexKey: "v_16",
      });
    }
  }, [getDijkstra, graph]);

  useEffect(() => {
    if (graph) {
      const startVertex = graph.getVertices()["v_95"];
      const endVertex = graph.getVertices()["v_16"];

      const { previousVertices } = dijkstra(graph, startVertex);
      const { vertices, edges } = getPathFromDijkstra(
        graph.getEdges(),
        previousVertices,
        endVertex
      );

      setVerticesList(vertices);
      setEdgesList(edges);
    }
  }, [graph]);

  useEffect(() => {
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

      const lastVertex = verticesList[verticesList.length - 1];

      if (objects && lastVertex.options && lastVertex.options.object) {
        const mapObject = objects.current[lastVertex.options.object];
        pathTimeline.to(mapObject, {
          duration: 0.5,
          fill: "#C7FFCC",
          stroke: "#4FBA5A",
        });
      }

      pathTimeline.resume();
    }
  }, [edgesList, pathTimeline, verticesList]);

  const vertexRefCallback = (el: HTMLElement | null) => {
    if (el && el.dataset.vertexKey) {
      let key = el.dataset.vertexKey.trim().toLowerCase();
      vertices.current[key] = el;
    }
  };

  const objectRefCallback = (el: HTMLElement | null) => {
    if (el && el.dataset.objectKey) {
      let key = el.dataset.objectKey.trim().toLowerCase();
      objects.current[key] = el;
    }
  };

  const edgeRefCallback = (el: HTMLElement | null) => {
    if (el && el.dataset.edgeKey) {
      let key = el.dataset.edgeKey.trim().toLowerCase();
      edges.current[key] = el;
    }
  };

  return (
    <>
      <div className={styles["Map"]}>
        <FloorMapSvg
          vertexRefCallback={vertexRefCallback}
          edgeRefCallback={edgeRefCallback}
          objectRefCallback={objectRefCallback}
        />
      </div>
    </>
  );
}

export default Map;
