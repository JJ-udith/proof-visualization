import React, { useState, useContext } from "react";
import { DataContext } from "../../pages/stack";

import styles from "./input.module.scss";
const Input = () => {
  const [values, setValues] = useContext(DataContext);
  let [textInput, setTextInput] = useState("");
  let [colorInput, setColorInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

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

  const handleSubmit = (event) => {
    event.preventDefault(); //will stop the refreshing of the page
    //adding up the new values to values State in ReactContext
    setValues((values) => [...values, { textInput: textInput, radioButtonColor: colorInput }]);

    //wenn Text input und Farbwahl getroffen, setze state auf valid und submitted
    if (textInput && colorInput) {
      setValid(true);
    }
    setSubmitted(true);
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

      {submitted && !colorInput && <div>Please chose a color.</div>}
      {submitted && !textInput && <div id="heap-chunk-error">Please enter a Heap Chunk.</div>}

      {/* <Output /> */}
    </div>
  );
};

export default Input;
