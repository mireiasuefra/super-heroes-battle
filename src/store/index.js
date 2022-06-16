import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import superHeroReducer from './reducers/super-heroes';

const reducer = combineReducers({superHeroReducer});
export const store = createStore(reducer, composeWithDevTools());
    