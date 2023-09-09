const { createSlice } = require("@reduxjs/toolkit");
const { registerUser, logIn } = require("./operations");

const singUpSlice = createSlice({
    name: 'registration',
    initialState: {
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false

    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.user.name = action.payload;
            state.user.email = action.payload;
            state.isLoggedIn = true
        })
        builder.addCase(logIn.fulfilled, (state, action) => {
            state.user.name = action.payload;
            state.user.email = action.payload;
            state.isLoggedIn = true
        })
    }
})

export default singUpSlice
