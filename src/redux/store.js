import { configureStore } from '@reduxjs/toolkit';
// import contactsSlice from './contactsSlice';
import singUpSlice from './singUpSlice';
// import { filterSlice } from './filterSlice';
// import { registerUser } from './operations';



export const store = configureStore({
    reducer: {
        signUp: singUpSlice.reducer,
        // contacts: contactsSlice.reducer,
        // filter: filterSlice.reducer
    }
});
