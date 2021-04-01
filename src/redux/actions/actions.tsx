import { SET_ELEMENT } from '../types/types';
import { IElement } from '../../App';

export const setElement = (element: IElement) => {
  return {
    type: SET_ELEMENT,
    payload: element,
  };
};
