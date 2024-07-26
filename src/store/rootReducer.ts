import { combineReducers } from '@reduxjs/toolkit';
import { baseApi } from '../services';
import { persistConfig, persistReducer } from './persist';
import venueReducer from '../features/venue';
import menuReducer from '../features/menu';
import baskedReducer from '../features/basket';

const rootReducer = combineReducers({
  basket: baskedReducer,
  venue: venueReducer,
  menu: menuReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
