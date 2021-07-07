import { createStore, combineReducers } from 'redux';

//var sampleVariable = ({ bar: "john d" });

const reducers = {  };

const rootReducer = combineReducers({reducers});

export const configureStore = () => createStore(rootReducer); 

