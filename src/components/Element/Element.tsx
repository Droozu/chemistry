import { IElement, TElementType } from '../../App';
import { setElement } from '../../redux';
import { useDispatch } from 'react-redux';

function setClassOfElement(elementType: TElementType): string {
  switch (elementType) {
    case 'S':
      return 'element__container--s';
    case 'P':
      return 'element__container--p';
    case 'D':
      return 'element__container--d';
    case 'F':
      return 'element__container--f';
  }
}

export const Element = ({ name, symbol, sequenceNumber, electronsOnLayer, atomicMass, elementType, id }: IElement) => {
  const dispatch = useDispatch();
  const elementClass: string = `element__container ${setClassOfElement(elementType)}`;
  const layers = electronsOnLayer.map((elLayer, index) => <span key={index}> {elLayer} </span>);
  return (
    <div
      onClick={() =>
        dispatch(setElement({ name, symbol, sequenceNumber, electronsOnLayer, atomicMass, elementType, id }))
      }
      className={elementClass}
    >
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
