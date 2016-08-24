import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import sentiment from './sentiment'

const rootReducer = combineReducers({sentiment, routing: routerReducer})

export default rootReducer;