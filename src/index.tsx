import React from 'react';
import ReactDOM from 'react-dom';
import Element from './App';
import { firstLayer, secondLayer, thirdLayer, fourthLayer, fifthLayer, sixthLayer,
    seventhLayer, eighthLayer, ninthLayer } from "./elementLayers";


ReactDOM.render(
  <React.StrictMode>
    <Element firstLayer={firstLayer}
             secondLayer={secondLayer}
             thirdLayer={thirdLayer}
             fourthLayer={fourthLayer}
             fifthLayer={fifthLayer}
             sixthLayer={sixthLayer}
             seventhLayer={seventhLayer}
             eighthLayer={eighthLayer}
             ninthLayer={ninthLayer}/>
  </React.StrictMode>,
  document.getElementById('root')
);

