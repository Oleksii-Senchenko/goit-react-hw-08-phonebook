import { getCurrentUser, logIn, logOut, refreshUser, registerUser } from "./operationsAuth";

const { createSlice } = require("@reduxjs/toolkit");

const singUpSlice = createSlice({


    name: 'registration',
    initialState: {
        user: {
            name: '',
            email: '',
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,

    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.user = action.payload;

            state.isLoggedIn = true
        })
        builder.addCase(logIn.fulfilled, (state, { payload }) => {
            state.user = payload.user
            state.token = payload.token
            state.isLoggedIn = true
        })
        builder.addCase(logOut.fulfilled, (state, action) => {
            state.user = {
                name: null,
                email: null,
            }
            state.token = null
            state.isLoggedIn = false
        })
        builder.addCase(getCurrentUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true
        })
        builder.addCase(refreshUser.fulfilled, (state, action)=>{
            state.isRefreshing = false;
        })
    }
})

export default singUpSlice
export const nameSelector = (state) => state