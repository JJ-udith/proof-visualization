import { color } from "d3";
import React, { useState, useContext } from "react";
import { DataContext } from "../../pages/stack";

import styles from "./input.module.scss";
const Input = () => {
  const [values, setValues] = useContext(DataContext);
  let [textInput, setTextInput] = useState("");
  let [colorInput, setColorInput] = useState("");

  //change state of text input field while typing (letter by letter)
  const handleTextInputChange = (event) => {
    event.persist();
    setTextInput(event.target.value);
  };
  //change state of radiobutton color when clicked
  const handleRadioButtonChange = (event) => {
    event.persist();
    setColorInput(event.target.value);
  };

  //check TextInput for spelling errors/wrong syntax or duplicates to give feedback to user
  const checkTextInput = (text) => {
    //determine the exact wording of the heap chunks and store each in RegExp Pattern
    const malStExp = new RegExp(/^malloc_block_stack\(.+\)$/, "gi");
    const malNoExp = new RegExp(/^malloc_block_node\(.+\)$/, "gi");
    const nodeValExp = new RegExp(/^node_value\(.+,.+\)$/, "gi");
    const nodeNextExp = new RegExp(/^node_next\(.+,.+\)$/, "gi");
    const stHeadExp = new RegExp(/^stack_head\(.+,.+\)$/, "gi");

    
      if (malStExp.test(text)) {
        return true;
      } else if (malNoExp.test(text)) {
        return true;
      } else if (nodeValExp.test(text)) {
        return true;
      } else if (nodeNextExp.test(text)) {
        return true;
      } else if (stHeadExp.test(text)) {
        return true;
      } else {
        alert("Please check the spelling of your entry.");
        return false;
      }
    }
 

  const handleSubmit = (event) => {
    event.preventDefault(); //will stop the refreshing of the page

    //Clear string from all spaces to make them comparable
    textInput = textInput.replaceAll(" ", "");


    if (!colorInput) {
      alert("The indication of the color is missing.");
    }

   
    if (!textInput) {
      alert("Please enter a heap chunk.");
    }

    // if color and textinput are present, check for errors and duplicates
    if (textInput && colorInput) {
 
      if (checkTextInput(textInput)) {
        
        if(values.map(value => value.textInput).includes(textInput)){
          alert("This Heap Chunk is already included in the set. It is not possible to add the same Heap Chunk twice.");
        }else{
          //adding up the new values to values State in ReactContext, data than available for GraphCalculation component
          setValues((values) => [...values, { textInput: textInput, radioButtonColor: colorInput }]);
        }
      }
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.textInput}
          id="heap-chunk"
          type="text"
          placeholder="Please enter a Heap Chunk"
          name="heapChunkRow"
          value={textInput}
          onChange={handleTextInputChange}
        />

        <div className={styles.radioButtons}>
          <input
            className={styles.accentBlack}
            id="black"
            type="radio"
            name="radiocolor"
            value="black"
            onChange={handleRadioButtonChange}
          />
          <label className={styles.radioLabel} htmlFor="radioButtonBlack">
            black
          </label>

          <input
            className={styles.accentGreen}
            id="green"
            type="radio"
            name="radiocolor"
            value="green"
            onChange={handleRadioButtonChange}
          />
          <label className={styles.radioLabel} htmlFor="radioButtonGreen">
            green
          </label>

          <input
            className={styles.accentRed}
            id="red"
            type="radio"
            name="radiocolor"
            value="red"
            onChange={handleRadioButtonChange}
          />
          <label className={styles.radioLabel} htmlFor="radioButtonRed">
            red
          </label>
        </div>

        <button className={styles.rowButton} type="submit">
          SUBMIT ROW +{" "}
        </button>
      </form>
    </div>
  );
};

export default Input;
