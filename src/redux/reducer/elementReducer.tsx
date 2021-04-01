import { SET_ELEMENT } from '../types/types';

const initialState = {
  currentElement: [],
};

const elementReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_ELEMENT:
      return {
        ...state,
        currentElement: action.payload,
      };
    default:
      return state;
  }
};

export default elementReducer;
