import React from 'react';
import './element.scss';
import { typeD, typeF, typeP, typeS } from '../../assets/constants/constants';

const setClassOfElement = (elementType: string): string => {
  if (elementType === typeS) {
    return 'element__container element__container--s';
  }
  if (elementType === typeP) {
    return 'element__container element__container--p';
  }
  if (elementType === typeD) {
    return 'element__container element__container--d';
  }
  if (elementType === typeF) {
    return 'element__container element__container--f';
  }
  return 'element__container';
};

interface IElementProps {
  name: string;
  symbol: string;
  sequenceNumber: number;
  electronsOnLayer: number[];
  atomicMass: number | string;
  elementType: string;
}

const Element = ({ name, symbol, sequenceNumber, electronsOnLayer, atomicMass, elementType }: IElementProps) => {
  const elementClass = setClassOfElement(elementType);
  const layers = electronsOnLayer.map((elLayer, index) => <span key={index}> {elLayer} </span>);
  return (
    <div className={elementClass}>
      <section className="element__info element__info--text">
        <h2 className="element__symbol">{symbol}</h2>
        <p className="element__name">{name}</p>
        <p className="element__mass">{atomicMass}</p>
      </section>
      <section className="element__info element__info--numbers">
        <p className="element__sequence">{sequenceNumber}</p>
        <div className="element__layers">{layers}</div>
      </section>
    </div>
  );
};

export default Element;
