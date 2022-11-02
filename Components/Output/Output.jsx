import styles from "./output.module.scss"
import React, {useContext} from 'react'
import { DataContext } from "../../pages/stack";

const Output = () => {
    const  [values] = useContext(DataContext);
  return (
    <div className={styles.fitTheGrid}>
      <div className={styles.textOutputWrapper}>
        {values.slice(1).map(value => (
        <div className={styles.textOutput} key={value.textInput} style={{padding:'10px'}}>
          <span >
            {value.textInput}
          </span>{' -> '}
          <span >
            {value.radioButtonColor}
          </span>
        </div>
      ))}
    </div>
    </div>
    
  )
}

export default Output