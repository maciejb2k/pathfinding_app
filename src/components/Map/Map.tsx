import React, { useEffect } from "react";
import { gsap } from "gsap";
import Loader from "react-loader-spinner";

import FloorMapSvg from "components/FloorMapSvg";
import { IState as GraphState } from "store/graph/reducer";
import { IState as PathState } from "store/path/reducer";
import { IState as SearchState } from "store/search/reducer";
import { getPath } from "store/path/actions";

import Edge from "algorithms/graph/Edge";

import styles from "./Map.module.scss";

type AppProps = {
  graph: GraphState;
  path: PathState;
  search: SearchState;
  getPath: typeof getPath;
};

function Map(props: AppProps) {
  const {
    graph: { isGenerating: isGraphGenerating, isEditMode, startVertex },
    path: {
      isGenerating: isPathGenerating,
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

  useEffect(() => {
    if (isEditMode) {
      Object.keys(verticesRefs.current).forEach((key) => {
        if (key !== startVertex) {
          gsap.to(verticesRefs.current[key], { opacity: 1, cursor: "pointer" });
        }
      });
    } else {
      Object.keys(verticesRefs.current).forEach((key) => {
        if (key !== startVertex) {
          gsap.to(verticesRefs.current[key], { opacity: 0 });
        }
      });
    }
  }, [isEditMode, startVertex]);

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

  return isGraphGenerating || isPathGenerating ? (
    <div className={styles["LoadingScreen"]}>
      <Loader type="TailSpin" color="#1b78d0" height={50} width={50} />
    </div>
  ) : (
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
