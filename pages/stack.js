import React, { useState, createContext } from "react";
import Input from "../Components/InputStack/InputStack";
import GraphCalculation from "../Components/GraphCalculation/GraphCalculation";
import styles from "../styles/Home.module.css";
import Output from "../Components/OutputStack/OutputStack";
import Assistance from "../Components/AssistanceStack/Assistance";

export const DataContext = createContext();

const Graph = () => {
  //data object, provided by React context for the other components to consume during runtime
  const [values, setValues] = useState([
    {
      textInput: "Default Heap Chunk",
      radioButtonColor: "Default Color",
    },
  ]);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1>Stack Algorithm Visualization</h1>
        <div className={styles.assistanceContainer}>
          <Assistance />
        </div>

        {/* Provider wraps the components that are to be supplied with the data object */}
        <DataContext.Provider value={[values, setValues]}>
          <Input />
          <Output />
          <GraphCalculation />
        </DataContext.Provider>
      </div>
    </div>
  );
};

export default Graph;
