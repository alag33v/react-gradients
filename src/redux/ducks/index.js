import { combineReducers } from 'redux';
import gradientDucks from './gradientDucks';

const rootReducer = combineReducers({
  gradient: gradientDucks
});

export default rootReducer;
