import { logIn, logOut, registerUser } from "./operationsAuth";

const { createSlice } = require("@reduxjs/toolkit");

const singUpSlice = createSlice({


    name: 'registration',
    initialState: {
        user: {
            name: '',
            email: '',
        },
        token: null,
        isLoggedIn: false

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
    }
})

export default singUpSlice
export const nameSelector = (state) => state