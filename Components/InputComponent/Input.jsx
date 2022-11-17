import { color } from "d3";
import React, { useState, useContext } from "react";
import { DataContext } from "../../pages/stack";

import styles from "./input.module.scss";
const Input = () => {
  const [values, setValues] = useContext(DataContext);
  let [textInput, setTextInput] = useState("");
  let [colorInput, setColorInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  
  //check if input matches certain pattern
  const malStExp = new RegExp(/^malloc_block_stack\(.+\)$/, 'gi');
  const malNoExp = new RegExp(/^malloc_block_node\(.+\)$/, 'gi');
  const nodeValExp = new RegExp(/^node_value\(.+,.+\)$/, 'gi');
  const nodeNextExp = new RegExp(/^node_next\(.+,.+\)$/, 'gi');
  const stHeadExp = new RegExp(/^stack_head\(.+,.+\)$/, 'gi');
   
  
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

  //check TextInput for spelling errors or wrong syntax to give feedback to user
  const checkTextInput = (text) => {
    if (malStExp.test(text)) {
      return true;
    }else if (malNoExp.test(text)) {
      return true;
    }else if (nodeValExp.test(text)){
      return true;
    }else if(nodeNextExp.test(text)){
      return true;
    }else if(stHeadExp.test(text)){
      return true;
    }else{
      alert('Please check the spelling of your entry.');
      return false;
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault(); //will stop the refreshing of the page
    
    //if color input is missing
    if(!colorInput){
      alert('The indication of the color is missing.');
    }

    //if text input is missing
    if(!textInput){
      alert('Please enter a heap chunk.')
    }

    // if color and textinput are present, check for errors
    if (textInput && colorInput) {
      setSubmitted(true);

      // if textinput expression passes the tests, set state to valid and setValues(values), so that GraphCalculation gets the data
      if(checkTextInput(textInput)){
        setValid(true);
        //adding up the new values to values State in ReactContext, data than available for GraphCalculation component
        setValues((values) => [...values, { textInput: textInput, radioButtonColor: colorInput }]);
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

      {/* {submitted && !colorInput && <div>Please chose a color.</div>}
      {submitted && !textInput && <div id="heap-chunk-error">Please enter a Heap Chunk.</div>}
      {!submitted &&  <div>No valid heap chunk. Please check the Syntax.</div> } */}
    </div>
  );
};

export default Input;
