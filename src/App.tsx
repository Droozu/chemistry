import React from 'react';
import "./app.scss"
import { typeS, typeD, typeF, typeP } from './constants'

const setClassOfElement = (elementType: string):string => {
    if (elementType === typeS ) {
        return "element__container element__container--s"
    }
    if (elementType === typeP) {
        return "element__container element__container--p"
    }
    if (elementType === typeD) {
        return "element__container element__container--d"
    }
    if (elementType === typeF) {
        return "element__container element__container--f"
    }
    return "element__container"
}


interface IElement {
    name: string,
    symbol: string,
    sequenceNumber: number,
    electronsOnLayer: number[],
    atomicMass: number,
    elementType: string
}

type ElementProps = {
    el: IElement
}

const Element = ({el}: ElementProps) => {
    const { name, symbol, sequenceNumber, electronsOnLayer, atomicMass, elementType } = el
    const elementClass = setClassOfElement(elementType)
    const layers = electronsOnLayer.map((layer, index) => (<span key={index}> {layer} </span>))
    return (
        <div className={elementClass}>
            <section className='element__info element__info--text'>
                <h2 className='element__symbol'>{symbol}</h2>
                <p className='element__name'>{name}</p>
                <p className='element__mass'>{atomicMass}</p>
            </section>
            <section className='element__info element__info--numbers'>
                <p className='element__sequence'>{sequenceNumber}</p>
                <div className='element__layers'>{layers}</div>
            </section>
        </div>
    )
}

export default Element
