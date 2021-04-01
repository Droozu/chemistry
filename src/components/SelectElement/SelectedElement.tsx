import { useSelector } from 'react-redux';
import { IElement, TElementType } from '../../App';
import { RootState } from '../../redux/rootReducer';

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

export const SelectedElement = () => {
  const { name, symbol, sequenceNumber, electronsOnLayer, atomicMass, elementType }: IElement = useSelector(
    (state: RootState) => state.element.currentElement
  );
  if (name) {
    const elementClass: string = `selected-element__container ${setClassOfElement(elementType)}`;
    const layers = electronsOnLayer.map((elLayer, index) => <span key={index}> {elLayer} </span>);
    return (
      <section className="selected-element">
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
        <div>
          <p className="selected-element__info">Символ элемента - {symbol}</p>
          <p className="selected-element__info">Название элемента - {name}</p>
          <p className="selected-element__info">Порядковый номер - {sequenceNumber}</p>
          <p className="selected-element__info">Относительная атомная масса - {atomicMass}</p>
          <p className="selected-element__info">Распределение электронов по слоям - {layers}</p>
        </div>
      </section>
    );
  }
  return null;
};
