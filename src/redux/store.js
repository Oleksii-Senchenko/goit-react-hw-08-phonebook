import { configureStore } from '@reduxjs/toolkit';
// import contactsSlice from './contactsSlice';
import singUpSlice from './auth/singUpSlice';
import contactsSlice from './contacts/contactsSlice';
import { filterSlice } from './contacts/filterSlice';
// import { filterSlice } from './filterSlice';
// import { registerUser } from './operations';



export const store = configureStore({
    reducer: {
        auth: singUpSlice.reducer,
        contacts: contactsSlice.reducer,
        filter: filterSlice.reducer
    }
});
