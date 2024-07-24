import { combineReducers } from '@reduxjs/toolkit';
import { baseApi } from '../services';
import { persistConfig, persistReducer } from './persist';
import venueReducer from '../features/venue';
import menuReducer from '../features/menu';

const rootReducer = combineReducers({
  venue: venueReducer,
  menu: menuReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
