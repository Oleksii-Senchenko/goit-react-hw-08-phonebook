import { getCurrentUser, logIn, logOut, refreshUser, registerUser } from "./operationsAuth";

const { createSlice } = require("@reduxjs/toolkit");





/////////////////////REGISTRATION////////////////////
const pendingRegister = (state, action) => {
    state.user = {
        name: null,
        email: null,
    }
    state.isLoggedIn = false
    state.error = null
}
const fulfilledStatus = (state, action) => {
    state.user = action.payload;
    state.isLoggedIn = true
    state.error = null
}
const rejectedStatus = (state, action) => {

    state.isLoggedIn = false
    state.error = action.payload
}
/////////////////////REGISTRATION////////////////////
//===========================================================
////////////////////LOGIN////////////////////
const pendinglogInStatus = (state, { payload }) => {
    state.user = {
        name: null,
        email: null,
    }
    state.isLoggedIn = false
    state.token = null
    state.error = null
}
const fulfilledlogInStatus = (state, { payload }) => {
    state.user = payload.user
    state.token = payload.token
    state.isLoggedIn = true
}

////////////////////LOGIN////////////////////

//===========================================================

////////////////////LOGOUT////////////////////
const pandingLogOut = (state, { payload }) => {
    state.user = payload.user
    state.token = payload.token
    state.isLoggedIn = true
    state.error = null
}
const fulfilledLogOut = (state, action) => {
    state.user = {
        name: null,
        email: null,
    }
    state.token = null
    state.isLoggedIn = false
    state.error = null
}
////////////////////LOGOUT////////////////////

//===========================================================

const pendingCurrentUser = (state, action) => {
    state.isLoggedIn = true
}

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
        error: null

    },
    extraReducers: (builder) => {
        /////////////////////REGISTRATION////////////////////
        builder.addCase(registerUser.pending, pendingRegister)
        builder.addCase(registerUser.fulfilled, fulfilledStatus)
        builder.addCase(registerUser.rejected, rejectedStatus)
        /////////////////////REGISTRATION////////////////////


        //===========================================================

        ////////////////////LOGIN////////////////////
        builder.addCase(logIn.pending, pendinglogInStatus)
        builder.addCase(logIn.fulfilled, fulfilledlogInStatus)
        builder.addCase(logIn.rejected, rejectedStatus)
        ////////////////////LOGIN////////////////////

        //===========================================================

        ////////////////////LOGOUT////////////////////

        builder.addCase(logOut.pending, pandingLogOut)
        builder.addCase(logOut.fulfilled, fulfilledLogOut)
        builder.addCase(logOut.rejected, rejectedStatus)

        ////////////////////LOGOUT////////////////////

        //===========================================================

        ////////////////////GETCURRENTUSER////////////////////
        
        builder.addCase(getCurrentUser.pending, pendingCurrentUser)
        builder.addCase(getCurrentUser.fulfilled, fulfilledStatus)
        builder.addCase(getCurrentUser.rejected, rejectedStatus)

        ////////////////////GETCURRENTUSER////////////////////

        //===========================================================

        builder.addCase(refreshUser.fulfilled, (state, action) => {
            state.isRefreshing = false;
        })
    }
})

export default singUpSlice
export const nameSelector = (state) => state