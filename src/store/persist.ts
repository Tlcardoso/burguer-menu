import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import venue from '../features/venue/slice';

const persistConfig = {
  key: 'burguer-menu',
  storage,
  whitelist: [venue.name],
};

export { persistConfig, persistReducer, storage };
