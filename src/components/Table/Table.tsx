import { ITable } from '../../App';
import Row from '../Row/Row';

export const Table = ({ layers }: ITable) => {
  const rows = layers.map((layer, index) => {
    return (
      <tr className="main-table__row">
        <td className="main-table__item main-table__item--rowFirstNumber">
          <h2 className="no_margin">{index + 1}</h2>
        </td>
        <td className="main-table__item main-table__item--rowSecondNumber">
          <h3 className="no_margin">{index + 1}</h3>
        </td>
        {Row(layer)}
      </tr>
    );
  });
  return (
    <table className="main-table">
      <caption>Периодическая система химических элементов</caption>
      <thead className="table__headers">
        <tr className="main-table__row">
          <td className="main-table__item" rowSpan={3}>
            Периоды
          </td>
          <td className="main-table__item" rowSpan={3}>
            Ряды
          </td>
          <td className="main-table__item" colSpan={9}>
            <h2 className="table__header">Группы элементов</h2>
          </td>
        </tr>
        <tr className="main-table__row">
          <td className="main-table__item main-table__item--group">
            <h3 className="table__headers">I</h3>
          </td>
          <td className="main-table__item main-table__item--group">
            <h3 className="table__headers">II</h3>
          </td>
          <td className="main-table__item main-table__item--group">
            <h3 className="table__headers">III</h3>
          </td>
          <td className="main-table__item main-table__item--group">
            <h3 className="table__headers">VI</h3>
          </td>
          <td className="main-table__item main-table__item--group">
            <h3 className="table__headers">V</h3>
          </td>
          <td className="main-table__item main-table__item--group">
            <h3 className="table__headers">VI</h3>
          </td>
          <td className="main-table__item main-table__item--group">
            <h3 className="table__headers">VII</h3>
          </td>
          <td className="main-table__item main-table__item--vii" colSpan={2}>
            <h3 className="table__headers--vii">VIII</h3>
          </td>
        </tr>
        <tr className="main-table__row">
          <td className="main-table__item main-table__item--type">
            <span className="table__headers--col">
              <span>a</span>
              <span>б</span>
            </span>
          </td>
          <td className="main-table__item">
            <span className="table__headers--col">
              <span>a</span>
              <span>б</span>
            </span>
          </td>
          <td className="main-table__item">
            <span className="table__headers--col">
              <span>a</span>
              <span>б</span>
            </span>
          </td>
          <td className="main-table__item">
            <span className="table__headers--col">
              <span>a</span>
              <span>б</span>
            </span>
          </td>
          <td className="main-table__item">
            <span className="table__headers--col">
              <span>a</span>
              <span>б</span>
            </span>
          </td>
          <td className="main-table__item">
            <span className="table__headers--col">
              <span>a</span>
              <span>б</span>
            </span>
          </td>
          <td className="main-table__item">
            <span className="table__headers--col">
              <span>a</span>
              <span>б</span>
            </span>
          </td>
          <td className="main-table__item">
            <span>б</span>
          </td>
          <td className="main-table__item">
            <span>а</span>
          </td>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};
