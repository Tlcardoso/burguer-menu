import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import venue from '../features/venue/slice';
import menu from '../features/menu/slice';

const persistConfig = {
  key: 'burguer-menu',
  storage,
  whitelist: [venue.name, menu.name],
};

export { persistConfig, persistReducer, storage };
