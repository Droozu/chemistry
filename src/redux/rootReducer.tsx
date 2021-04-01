import { combineReducers } from 'redux';
import elementReducer from './reducer/elementReducer';

const rootReducer = combineReducers({
  element: elementReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
