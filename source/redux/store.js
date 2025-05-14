import { combineReducers, configureStore } from '@reduxjs/toolkit';
import  LoginSlice  from '../screens/Login/redux/LoginSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['login'],
};

const rootReducer=combineReducers({
    login: LoginSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);

export const clearPersistedData = () => {
  persistor.purge();
};