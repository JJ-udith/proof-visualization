# Proof-Visualization

## Introduction

This project was developed as part of my bachelor thesis. The goal of the project was to find out if and how visualizations can effectively support the proof of algorithms. Therefore a support system should be designed. The Proof-Visualization App is the prototype of this support system. It consists of two different visualizations: successor and stack.

## Technologies

* Node: 16.18.0
* Yarn: 1.22.17
* next: 12.3.1
* eslint-config-next: 12.3.1
* react: 18.2.0
* react-dom: 18.2.0

## Launch

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

or got to https://proof-visualization.vercel.app/ to see the deployed version of the app.

### Successor Algorithm Visualization

To reproduce the proof and apply the visualization, proceed as follows:
Go to [Verifast](https://github.com/verifast/verifast), download and install Verifast according to your operation system.
Open the successor.c file from [here](./algorithms/successor.c) in Verifast and start the verification.
On the Successor page it is now possible to display the assumptions collected in Verifast on a number line.  

### Stack Algorithm Visualization  
  
To reproduce the proof and apply the visualization, proceed as follows:
Go to [Verifast](https://github.com/verifast/verifast), download and install Verifast according to your operation system.
Open the stack.s file from [here](./algorithms/stack.c) in Verifast and start the verification.
As you step through the verification in the Steps Part of the window, you can see the Heap Chunks changing in the Heap Chunks part of the Window. You can then transfer the Heap Chunks into the tool you find on the Stack page of the App, to visualize the different Pre- and Postconditions as well as the State of Heap Chunks inbetween.
