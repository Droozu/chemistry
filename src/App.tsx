import { Provider } from "react-redux";
import { store } from "./redux/store";
import { SelectedElement } from "./components/SelectElement/SelectedElement";
import { Table } from "./components/Table/Table";
import "./scss/App.scss"
import {
  layers
} from './assets/constants/elementLayers';

export type TElementType = "S" | "P" | "D" | "F";

export interface IElement {
  id: number,
  name: string;
  symbol: string;
  sequenceNumber: number;
  electronsOnLayer: number[];
  atomicMass: number | string;
  elementType: TElementType,
}

export interface ITable {
  layers: Array<Array<IElement | null | Array<IElement>>>
}

export const App = () => {
  return (
      <Provider store={store}>
        <Table
            layers={layers}
        />
        <SelectedElement/>
      </Provider>
  );
};