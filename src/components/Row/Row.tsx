import React from 'react';
import Element from '../Element';
import './Row.scss';

type IElement = {
  name: string;
  symbol: string;
  sequenceNumber: number;
  electronsOnLayer: number[];
  atomicMass: number | string;
  elementType: string;
};

export default function Row(layer: Array<IElement | Array<IElement> | null>) {
  return layer.map((element, index) => {
    if (Array.isArray(element)) {
      const elements = element.map((el, ind) => {
        const { name, elementType, atomicMass, electronsOnLayer, sequenceNumber, symbol } = el;
        return (
          <td className="table--vii" key={ind}>
            <Element
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
        <td>
          <table>
            <tr>{elements}</tr>
          </table>
        </td>
      );
    }
    if (element !== null) {
      const { name, elementType, atomicMass, electronsOnLayer, sequenceNumber, symbol } = element;
      return (
        <td key={index}>
          <Element
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
      <td key={index}>
        <div className="element__container"> </div>
      </td>
    );
  });
}
