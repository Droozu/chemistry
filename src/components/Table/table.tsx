import React from 'react';
import Row from '../Row';
import './table.scss';

type IElement = {
  name: string;
  symbol: string;
  sequenceNumber: number;
  electronsOnLayer: number[];
  atomicMass: number | string;
  elementType: string;
};

interface IElementProps {
  firstLayer: Array<IElement | null>;
  secondLayer: Array<IElement | null>;
  thirdLayer: Array<IElement | null>;
  fourthLayer: Array<IElement | Array<IElement> | null>;
  fifthLayer: Array<IElement | null>;
  sixthLayer: Array<IElement | Array<IElement> | null>;
  seventhLayer: Array<IElement | null>;
  eighthLayer: Array<IElement | Array<IElement> | null>;
  ninthLayer: Array<IElement | null>;
}

export default function Table({
  firstLayer,
  secondLayer,
  thirdLayer,
  fourthLayer,
  fifthLayer,
  sixthLayer,
  seventhLayer,
  eighthLayer,
  ninthLayer,
}: IElementProps) {
  const first = Row(firstLayer);
  const second = Row(secondLayer);
  const third = Row(thirdLayer);
  const fourth = Row(fourthLayer);
  const fifth = Row(fifthLayer);
  const sixth = Row(sixthLayer);
  const seventh = Row(seventhLayer);
  const eighth = Row(eighthLayer);
  const ninth = Row(ninthLayer);

  return (
    <table>
      <caption>Периодическая система химических элементов</caption>
      <thead style={{ textAlign: 'center' }}>
        <tr>
          <td rowSpan={2}>Периоды</td>
          <td rowSpan={2}>Ряды</td>
          <td>I</td>
          <td>II</td>
          <td>III</td>
          <td>VI</td>
          <td>V</td>
          <td>VI</td>
          <td>VII</td>
          <td colSpan={2}>VIII</td>
        </tr>
        <tr>
          <td>
            <span className="table-headers--col">
              <span>a</span>
              <span>б</span>
            </span>
          </td>
          <td>
            <span className="table-headers--col">
              <span>a</span>
              <span>б</span>
            </span>
          </td>
          <td>
            <span className="table-headers--col">
              <span>a</span>
              <span>б</span>
            </span>
          </td>
          <td>
            <span className="table-headers--col">
              <span>a</span>
              <span>б</span>
            </span>
          </td>
          <td>
            <span className="table-headers--col">
              <span>a</span>
              <span>б</span>
            </span>
          </td>
          <td>
            <span className="table-headers--col">
              <span>a</span>
              <span>б</span>
            </span>
          </td>
          <td>
            <span className="table-headers--col">
              <span>a</span>
              <span>б</span>
            </span>
          </td>
          <td>
            <span>б</span>
          </td>
          <td>
            <span>а</span>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="table-headers--row">
            <h2>1</h2>
          </td>
          <td className="table-headers--row">
            <h3>1</h3>
          </td>
          {first}
        </tr>
        <tr>
          <td className="table-headers--row">
            <h2>2</h2>
          </td>
          <td className="table-headers--row">
            <h3>2</h3>
          </td>
          {second}
        </tr>

        <tr>
          <td className="table-headers--row">
            <h2>3</h2>
          </td>
          <td className="table-headers--row">
            <h3>3</h3>
          </td>
          {third}
        </tr>
        <tr>
          <td className="table-headers--row" rowSpan={2}>
            <h2>4</h2>
          </td>
          <td className="table-headers--row">
            <h3>4</h3>
          </td>
          {fourth}
        </tr>

        <tr>
          <td className="table-headers--row">
            <h3>5</h3>
          </td>
          {fifth}
        </tr>
        <tr>
          <td className="table-headers--row" rowSpan={2}>
            <h2>5</h2>
          </td>
          <td className="table-headers--row">
            <h3>6</h3>
          </td>
          {sixth}
        </tr>
        <tr>
          <td className="table-headers--row">
            <h3>7</h3>
          </td>
          {seventh}
        </tr>
        <tr>
          <td className="table-headers--row" rowSpan={2}>
            <h2>6</h2>
          </td>
          <td className="table-headers--row">
            <h3>8</h3>
          </td>
          {eighth}
        </tr>
        <tr>
          <td className="table-headers--row">
            <h3>9</h3>
          </td>
          {ninth}
        </tr>
      </tbody>
    </table>
  );
}
