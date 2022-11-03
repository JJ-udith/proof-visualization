import React, { useState, createContext } from "react";
import Input from "../Components/InputComponent/Input";
import GraphCalculation from "../Components/GraphCalculation/GraphCalculation";
import styles from "../styles/Home.module.css";
import Output from "../Components/Output/Output";

export const DataContext = createContext();

const Graph = () => {
    //data object, provided by React context for the other components to consume during runtime
  const [values, setValues] = useState([
    {
      textInput: "Heap Chunks allready entered",
      radioButtonColor: "Color of the textline",
    },
  ]);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1>Stack Algorithm Visualization</h1>
        <span>
          malloc_block_stack(s)<br/>
          stack_head(s, h)<br/>
          node_next(n, h)<br/>
          malloc_block_node(n)<br/>
          node_value(n, 10)<br/>
        </span>
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
