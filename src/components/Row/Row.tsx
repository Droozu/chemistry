import React from 'react';
import { Element } from '../Element/Element';
import { IElement } from '../../App';

const uuid = require('uuid/v4');

export default function Row(layer: Array<IElement | Array<IElement> | null>) {
  return layer.map((element) => {
    if (Array.isArray(element)) {
      const elements = element.map((el) => {
        const { name, elementType, atomicMass, electronsOnLayer, sequenceNumber, symbol, id } = el;
        return (
          <td className="main-table__item table--vii" key={id}>
            <Element
              id={id}
              name={name}
              symbol={symbol}
              sequenceNumber={sequenceNumber}
              electronsOnLayer={electronsOnLayer}
              atomicMass={atomicMass}
              elementType={elementType}
            />
          </td>
        );
      });
      return (
        <td className="main-table__item">
          <table className="d-element-table">
            <tbody>
              <tr>{elements}</tr>
            </tbody>
          </table>
        </td>
      );
    }
    if (element !== null) {
      const { name, elementType, atomicMass, electronsOnLayer, sequenceNumber, symbol, id } = element;
      return (
        <td className="main-table__item" key={id}>
          <Element
            id={id}
            name={name}
            symbol={symbol}
            sequenceNumber={sequenceNumber}
            electronsOnLayer={electronsOnLayer}
            atomicMass={atomicMass}
            elementType={elementType}
          />
        </td>
      );
    }
    return (
      <td className="main-table__item" key={uuid}>
        <div className="element__container"> </div>
      </td>
    );
  });
}
