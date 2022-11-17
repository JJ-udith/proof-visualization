import React from "react";

const Assistance = () => {
  return (
    <div>
      <details>
        <summary>Guide</summary>
        In VeriFast the Heap Chunks of a proof can be examined in various states.
        <br />
        Copy a Heap Chunk and choose the radio button color to match
        <br />
        the font color in VeriFast of the chosen Heap Chunk.
        <br />
        <br />
        As soon as all Heap Chunks are complete, you can use "Draw State"
        <br />
        to display the visualization for this set of Heap Chunks.
        <br />
        
      </details>
      <br />
      <details>
        <summary>Exemplary Heap Chunks</summary>
        <ul>
          <li>malloc_block_stack(s)</li>
          <li>stack_head(s, h)</li>
          <li>node_next(n, h)</li>
          <li>malloc_block_node(n)</li>
          <li>node_value(n, 10)</li>
        </ul>
      </details>
    </div>
  );
};

export default Assistance;
