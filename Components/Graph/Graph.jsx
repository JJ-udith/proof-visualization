import React, { useState, useEffect } from "react";
import CytoscapeComponent from "react-cytoscapejs";
import Cytoscape from "cytoscape";
import dagre from "cytoscape-dagre";
import styles from "./graph.module.scss";

Cytoscape.use(dagre);

const Graph = ({ elements }) => {
  let myCyRef;

  useEffect(() => {
    myCyRef.layout({ name: "dagre" }).run();
  }, [elements]);

  const layout = { name: "dagre" };

  const style = [
    {
      selector: "node",
      css: {
        content: "data(name)",
        "text-valign": "center",
        "text-halign": "center",
        shape: "data(shape)",
        "border-color": "data(bordercolor)",
        "border-width": "3",
        padding: "20",
      },
    },
    {
      selector: ":parent",
      css: {
        "text-valign": "top",
        "text-halign": "center",
      },
    },
    {
      selector: "edge",
      css: {
        content: "data(name)",
        "text-margin-y": -17,
        "curve-style": "bezier",
        "target-arrow-shape": "triangle",
        "line-color": "data(color)",
      },
    },
  ];

  return (
    <div className={styles.graphContainer}>
      <div className={styles.cytoScapeFrame}>
        <CytoscapeComponent
          elements={elements}
          stylesheet={style}
          style={{ width: "600px", height: "600px" }}
          layout={layout}
          cy={(cy) => {
            myCyRef = cy;
          }}
        />
      </div>
    </div>
  );
};

export default Graph;
