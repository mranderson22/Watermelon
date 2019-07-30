import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import houseReducer from '../reducers/houses';
import roomReducer from '../reducers/rooms';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({ 
      auth: authReducer,
      houses: houseReducer,
      rooms: roomReducer
      }),
      composeEnhancers(applyMiddleware(thunk))
    );
    
  return store;
};


