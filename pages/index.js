import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import Link from "next/link";

export default function Home({}) {
  return (
    <div className={styles.main}>
      <Head>
        <title>ProofVisualization App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Proof Visualization</h1>
        </div>
        <div className={styles.linkContainer}>
          <Link href="/successor">
            <div className={styles.successorContainer}>
              <a>Successor</a>
            </div>
          </Link>
          <Link href="/stack">
            <div className={styles.stackContainer}>
              <a>Stack</a>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
