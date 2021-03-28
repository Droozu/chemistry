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

const getRow = (layer: Array<IElement | Array<IElement> | null>) => {
    return layer.map((element, index) => {
        if (Array.isArray(element)) {
            const elements = element.map((el, ind) => {
                const { name, elementType, atomicMass, electronsOnLayer, sequenceNumber, symbol } = el
                const elementClass = setClassOfElement(elementType)
                const layers = electronsOnLayer.map((elLayer, index) => <span key={index}> {elLayer} </span>)
                return (
                    <td className="element__table--vii" key={ind}><div className={elementClass}>
                        <section className='element__info element__info--text'>
                            <h2 className='element__symbol'>{symbol}</h2>
                            <p className='element__name'>{name}</p>
                            <p className='element__mass'>{atomicMass}</p>
                        </section>
                        <section className='element__info element__info--numbers'>
                            <p className='element__sequence'>{sequenceNumber}</p>
                            <div className='element__layers'>{layers}</div>
                        </section>
                    </div></td>
                )
            })
            return (
                <td>
                <table>
                    <tr>
                        {elements}
                    </tr>
                </table>
                </td>
            )
        }
        if (element !== null) {
            const { name, elementType, atomicMass, electronsOnLayer, sequenceNumber, symbol } = element
            const elementClass = setClassOfElement(elementType)
            const layers = electronsOnLayer.map((elLayer, index) => <span key={index}> {elLayer} </span>)
            return (
                <td key={index}><div className={elementClass}>
                    <section className='element__info element__info--text'>
                        <h2 className='element__symbol'>{symbol}</h2>
                        <p className='element__name'>{name}</p>
                        <p className='element__mass'>{atomicMass}</p>
                    </section>
                    <section className='element__info element__info--numbers'>
                        <p className='element__sequence'>{sequenceNumber}</p>
                        <div className='element__layers'>{layers}</div>
                    </section>
                </div></td>
            )
        }
        return <td key={index}><div className='element__container'> </div></td>
    })
}


type IElement = {
    name: string,
    symbol: string,
    sequenceNumber: number,
    electronsOnLayer: number[],
    atomicMass: number | string,
    elementType: string
}


interface IElementProps {
    firstLayer: Array<IElement | null>,
    secondLayer: Array<IElement | null>,
    thirdLayer: Array<IElement | null>,
    fourthLayer: Array<IElement | Array<IElement> | null>,
    fifthLayer: Array<IElement | null>,
    sixthLayer: Array<IElement | Array<IElement> | null>,
    seventhLayer: Array<IElement | null>,
    eighthLayer: Array<IElement | Array<IElement> | null>,
    ninthLayer: Array<IElement | null>,
}

const Element = ({firstLayer, secondLayer, thirdLayer, fourthLayer, fifthLayer, sixthLayer,
                     seventhLayer, eighthLayer, ninthLayer}: IElementProps) => {
    const first = getRow(firstLayer)
    const second = getRow(secondLayer)
    const third = getRow(thirdLayer)
    const fourth = getRow(fourthLayer)
    const fifth = getRow(fifthLayer)
    const sixth = getRow(sixthLayer)
    const seventh = getRow(seventhLayer)
    const eighth = getRow(eighthLayer)
    const ninth = getRow(ninthLayer)

    return (
        <table>
            <tr>
                {first}
            </tr>
            <tr>
                {second}
            </tr>
            <tr>
                {third}
            </tr>
            <tr>
                {fourth}
            </tr>
            <tr>
                {fifth}
            </tr>
            <tr>
                {sixth}
            </tr>
            <tr>
                {seventh}
            </tr>
            <tr>
                {eighth}
            </tr>
            <tr>
                {ninth}
            </tr>
        </table>
    )
}

export default Element
