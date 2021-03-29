import React from "react"
import Element from "./Element";
import "./table.scss"

const getRow = (layer: Array<IElement | Array<IElement> | null>) => {
    return layer.map((element, index) => {
        if (Array.isArray(element)) {
            const elements = element.map((el, ind) => {
                const { name, elementType, atomicMass, electronsOnLayer, sequenceNumber, symbol } = el
                return (
                    <td className="table--vii" key={ind}>
                        <Element name={name} symbol={symbol}
                                 sequenceNumber={sequenceNumber}
                                 electronsOnLayer={electronsOnLayer} atomicMass={atomicMass}
                                 elementType={elementType}/>
                    </td>
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
            return (
                <td key={index}>
                    <Element
                        name={name} symbol={symbol} sequenceNumber={sequenceNumber}
                        electronsOnLayer={electronsOnLayer} atomicMass={atomicMass} elementType={elementType}/>
                </td>
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

const Table = ({firstLayer, secondLayer, thirdLayer, fourthLayer, fifthLayer, sixthLayer,
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
                <td>Периоды</td>
                <td>Ряды</td>
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
                <td>1</td>
                <td>1</td>
                {first}
            </tr>
            <tr>
                <td>2</td>
                <td>2</td>
                {second}
            </tr>

            <tr>
                <td>3</td>
                <td>3</td>
                {third}
            </tr>
            <tr>
                <td rowSpan={2}>4</td>
                <td>4</td>
                {fourth}
            </tr>

            <tr>
                <td>5</td>
                {fifth}
            </tr>
            <tr>
                <td rowSpan={2}>5</td>
                <td>6</td>
                {sixth}
            </tr>
            <tr>
                <td>7</td>
                {seventh}
            </tr>
            <tr>
                <td rowSpan={2}>6</td>
                <td>8</td>
                {eighth}
            </tr>
            <tr>
                <td>9</td>
                {ninth}
            </tr>
        </table>
    )
}

export default Table