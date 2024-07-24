import { combineReducers } from '@reduxjs/toolkit';
import { baseApi } from '../services';
import { persistConfig, persistReducer } from './persist';
import venueReducer from '../features/venue';

const rootReducer = combineReducers({
  venue: venueReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
