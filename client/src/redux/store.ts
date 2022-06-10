import { createStore, combineReducers } from 'redux'
import { LocalReducer } from './reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { initialState } from './reducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],
};


const rootReducer = combineReducers({
  local: persistReducer(persistConfig, LocalReducer)
});

export const store = createStore(rootReducer);
export const persistor = persistStore(store);
