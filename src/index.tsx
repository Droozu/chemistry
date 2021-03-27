import React from 'react';
import ReactDOM from 'react-dom';
import Element from './App';

interface IElement {
    name: string,
    symbol: string,
    sequenceNumber: number,
    electronsOnLayer: number[],
    atomicMass: number,
    elementType: string
}

const hydrogen: IElement = {
    name: "Водород",
    symbol: "H",
    sequenceNumber: 1,
    electronsOnLayer: [1],
    atomicMass: 1.008,
    elementType: "S"
}

ReactDOM.render(
  <React.StrictMode>
    <Element el={hydrogen}/>
  </React.StrictMode>,
  document.getElementById('root')
);

