import React from 'react'
import InputSucc from '../Components/InputSucc/InputSucc'
import OutputSucc from '../Components/OutputSucc/outputSucc'
import Footer from '../Components/Footer/Footer'
import styles from "../styles/Home.module.css";

const successorV2 = () => {
  return (
    <div className={styles.wrapper}>
        <InputSucc />
        <OutputSucc />
        <Footer />
    </div>
  )
}

export default successorV2