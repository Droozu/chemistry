import React from 'react';
import "./app.scss"
import Table from "../Table";
import { firstLayer, secondLayer, thirdLayer, fourthLayer, fifthLayer, sixthLayer,
    seventhLayer, eighthLayer, ninthLayer } from "../../assets/constants/elementLayers";

const App = () => {
    return (
        <>
            <Table firstLayer={firstLayer}
                   secondLayer={secondLayer}
                   thirdLayer={thirdLayer}
                   fourthLayer={fourthLayer}
                   fifthLayer={fifthLayer}
                   sixthLayer={sixthLayer}
                   seventhLayer={seventhLayer}
                   eighthLayer={eighthLayer}
                   ninthLayer={ninthLayer}
            />
        </>
    )
}

export default App