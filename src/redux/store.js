import { configureStore } from '@reduxjs/toolkit';
import singUpSlice from './auth/authSlice';
import contactsSlice from './contacts/contactsSlice';
import { filterSlice } from './contacts/filterSlice';
import storage from 'redux-persist/lib/storage'
import {
    persistStore, persistReducer
} from 'redux-persist';


const persistConfig = {
    key: 'token',
    storage,
    whitelist: ['token'],
}


export const store = configureStore({
    reducer: {
        auth: persistReducer(persistConfig, singUpSlice.reducer),
        contacts: contactsSlice.reducer,
        filter: filterSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
            // {
            //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            // },
        }),
});
export const persistor = persistStore(store)